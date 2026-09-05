import json
import re
import sys

def extract_concentration_value(conc_str):
    if not conc_str:
        return ""
    # Extract only the first contiguous sequence of numbers/dots to avoid mixing e.g. "1mg/5ml" as "15"
    match = re.search(r'([\d\.]+)', str(conc_str))
    if match:
        return match.group(1).strip('.')
    return ""

def normalize_text(text):
    if not text:
        return ""
    return str(text).strip().lower()

def get_form_class(text):
    text = normalize_text(text)
    if not text:
        return "other"
    if re.search(r'\b(syp|syr|susp|suspension|syrup|sol|solution|elixir)\b', text):
        return "liquid"
    if re.search(r'\b(tab|caps|cap|capsule|tablet|pill)\b', text):
        return "solid"
    if re.search(r'\b(amp|vial|inj|injection|iv|im)\b', text):
        return "injection"
    if re.search(r'\b(drop|drops)\b', text):
        return "drops"
    if re.search(r'\b(supp|suppository)\b', text):
        return "suppository"
    if re.search(r'\b(cream|oint|ointment|gel|lotion)\b', text):
        return "topical"
    if re.search(r'\b(spray|inhaler|aero)\b', text):
        return "inhaler"
    return "other"

def main():
    print("Reading drugDatabase_backup.js...")
    try:
        with open('drugDatabase_backup.js', 'r', encoding='utf-8') as f:
            content = f.read()
    except FileNotFoundError:
        print("Please ensure drugDatabase_backup.js is present.")
        sys.exit(1)
        
    prefix = 'window.drugDatabase = '
    json_str = content[len(prefix):].strip()
    if json_str.endswith(';'):
        json_str = json_str[:-1]
        
    data = json.loads(json_str)
    
    saudi_mapping = {}
    
    # Pass 1: Build mapping from Saudi database
    for key, item in data.items():
        if not key.startswith('EG_'):
            active = normalize_text(item.get('name'))
            conc = extract_concentration_value(item.get('concentration') or item.get('composition') or item.get('tradeName'))
            form = get_form_class(item.get('formulation') or item.get('name') or item.get('tradeName'))
            
            if active:
                map_key = (active, conc, form)
                if map_key not in saudi_mapping:
                    saudi_mapping[map_key] = item

    print(f"Built saudi mapping with {len(saudi_mapping)} unique combinations.")
    
    # Pass 1.5: Backfill missing Egyptian active ingredients
    trade_name_to_active = {}
    for key, item in data.items():
        if key.startswith('EG_'):
            active = normalize_text(item.get('active') or item.get('name') or item.get('composition'))
            trade = normalize_text(item.get('tradeName'))
            if active and trade:
                first_word = trade.split()[0]
                if first_word not in trade_name_to_active:
                    trade_name_to_active[first_word] = active
                    
    for key, item in data.items():
        if key.startswith('EG_'):
            active = normalize_text(item.get('active') or item.get('name') or item.get('composition'))
            if not active:
                trade = normalize_text(item.get('tradeName'))
                if trade:
                    first_word = trade.split()[0]
                    if first_word in trade_name_to_active:
                        # backfill
                        item['active'] = trade_name_to_active[first_word]
    
    match_count = 0
    # Pass 2: Match Egyptian items
    for key, item in data.items():
        if key.startswith('EG_'):
            active_variants = [
                normalize_text(item.get('active')),
                normalize_text(item.get('name')),
                normalize_text(item.get('composition'))
            ]
            conc = extract_concentration_value(item.get('concentration') or item.get('tradeName') or item.get('name'))
            # For Egyptian items, the formulation is usually buried in 'name' or 'tradeName'
            form_text = str(item.get('name', '')) + " " + str(item.get('tradeName', '')) + " " + str(item.get('active', ''))
            form = get_form_class(form_text)
            
            matched_saudi = None
            for act in active_variants:
                if not act: continue
                test_key = (act, conc, form)
                if test_key in saudi_mapping:
                    matched_saudi = saudi_mapping[test_key]
                    break
                
                # Also try without concentration if formulation and active match perfectly and conc is empty in one of them
                # But it's riskier. Let's stick to exact match first.
                
            if matched_saudi:
                item['doses'] = matched_saudi.get('doses', [])
                item['administration'] = matched_saudi.get('administration')
                item['minAge'] = matched_saudi.get('minAge')
                item['pregnancyCategory'] = matched_saudi.get('pregnancyCategory')
                item['breastfeedingCategory'] = matched_saudi.get('breastfeedingCategory')
                
                # Assign the Saudi code so that SP CASES and other modules link properly
                item['code'] = matched_saudi.get('code')
                
                match_count += 1

    print(f"Updated {match_count} Egyptian entries with form-aware matching and saudi code injection.")
    
    new_content = prefix + json.dumps(data, ensure_ascii=False, indent=4) + ';\n'
    with open('drugDatabase.js', 'w', encoding='utf-8') as f:
        f.write(new_content)

if __name__ == "__main__":
    main()
