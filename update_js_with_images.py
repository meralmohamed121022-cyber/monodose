import json
import codecs

def normalize_text(text):
    if not text:
        return ""
    return str(text).strip().lower()

def main():
    print("Reading drugDatabase.js...")
    try:
        with codecs.open('drugDatabase.js', 'r', 'utf-8') as f:
            content = f.read()
    except FileNotFoundError:
        print("Please ensure drugDatabase.js is present.")
        return
        
    prefix = 'window.drugDatabase = '
    json_str = content[len(prefix):].strip()
    if json_str.endswith(';'):
        json_str = json_str[:-1]
        
    data = json.loads(json_str)
    
    print("Reading saudi_database.json...")
    with codecs.open('saudi_database.json', 'r', 'utf-8') as f:
        saudi_db = json.load(f)
        
    print("Reading egyptian_database_with_doses.json...")
    with codecs.open('egyptian_database_with_doses.json', 'r', 'utf-8') as f:
        eg_db = json.load(f)

    # 1. Update Saudi items in data
    saudi_update_count = 0
    for key, item in saudi_db.items():
        if key in data:
            if 'image_url' in item:
                data[key]['image_url'] = item['image_url']
                saudi_update_count += 1
                
    # 2. Update Egyptian items in data
    # Create an index of Egyptian items by tradeName (normalized)
    eg_index = {}
    for item in eg_db:
        trade = normalize_text(item.get('tradeName') or item.get('name'))
        if trade:
            eg_index[trade] = item.get('image_url', '')

    eg_update_count = 0
    for key, item in data.items():
        if key.startswith('EG_'):
            trade = normalize_text(item.get('tradeName') or item.get('name'))
            if trade in eg_index:
                data[key]['image_url'] = eg_index[trade]
                eg_update_count += 1

    print(f"Updated {saudi_update_count} Saudi drugs with images.")
    print(f"Updated {eg_update_count} Egyptian drugs with images.")
    
    # Save back to drugDatabase.js
    new_content = prefix + json.dumps(data, ensure_ascii=False, indent=4) + ';\n'
    with codecs.open('drugDatabase.js', 'w', 'utf-8') as f:
        f.write(new_content)
        
    print("Saved drugDatabase.js")

if __name__ == '__main__':
    main()
