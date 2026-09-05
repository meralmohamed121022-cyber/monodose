import json
import re

def normalize_text(text):
    if not text:
        return ""
    return str(text).strip().lower()

def extract_concentration_value(conc_str):
    if not conc_str:
        return ""
    # Just extract numbers/dots/commas and lower case
    return re.sub(r'[^\d\.,]', '', str(conc_str)).strip('.,')

def main():
    print("Loading databases...")
    with open('saudi_database.json', 'r', encoding='utf-8') as f:
        saudi_db = json.load(f)
        
    with open('egyptian_database.json', 'r', encoding='utf-8') as f:
        egypt_db = json.load(f)
        
    # Create a mapping of (active_ingredient, concentration) -> saudi_item
    # Since saudi_db is a dictionary of dicts:
    saudi_mapping = {}
    for code, item in saudi_db.items():
        active = normalize_text(item.get('name'))
        concentration = extract_concentration_value(item.get('concentration'))
        
        # We can also use formulation as a key if needed
        # formulation = normalize_text(item.get('formulation'))
        
        if active:
            key = (active, concentration)
            # Just keeping the first match or combining them. 
            # We'll just keep the first match for simplicity.
            if key not in saudi_mapping:
                saudi_mapping[key] = item

    print(f"Built mapping for {len(saudi_mapping)} unique Saudi items.")
    
    # Now loop through Egyptian DB and add doses
    match_count = 0
    for item in egypt_db:
        active = normalize_text(item.get('active'))
        concentration = extract_concentration_value(item.get('concentration'))
        
        key = (active, concentration)
        
        if key in saudi_mapping:
            matched_saudi = saudi_mapping[key]
            if 'doses' in matched_saudi:
                item['doses'] = matched_saudi['doses']
                item['administration'] = matched_saudi.get('administration')
                item['minAge'] = matched_saudi.get('minAge')
                item['pregnancyCategory'] = matched_saudi.get('pregnancyCategory')
                item['breastfeedingCategory'] = matched_saudi.get('breastfeedingCategory')
                match_count += 1
                
    print(f"Matched and updated {match_count} items in the Egyptian database.")
    
    with open('egyptian_database_with_doses.json', 'w', encoding='utf-8') as f:
        json.dump(egypt_db, f, ensure_ascii=False, indent=4)
        
    print("Saved updated database to 'egyptian_database_with_doses.json'.")

if __name__ == "__main__":
    main()
