import json
import codecs
import re

def normalize(text):
    if not text: return ''
    t = text.lower().strip()
    t = re.sub(r'[^a-z0-9]', '', t)
    t = t.replace('capsules', 'cap').replace('capsule', 'cap').replace('caps', 'cap')
    t = t.replace('tablets', 'tab').replace('tablet', 'tab').replace('tabs', 'tab')
    t = t.replace('suspension', 'susp').replace('syrup', 'syr')
    return t

def main():
    print("Reading drugDatabase.js...")
    with open('drugDatabase.js', 'r', encoding='utf-8') as f:
        content = f.read()
        
    prefix = 'window.drugDatabase = '
    json_str = content[len(prefix):].strip()
    if json_str.endswith(';'):
        json_str = json_str[:-1]
        
    db = json.loads(json_str)
    
    groups = {}
    for k, v in db.items():
        t = normalize(v.get('tradeName', ''))
        if not t: continue
        if t not in groups:
            groups[t] = []
        groups[t].append(k)
        
    shared_images_count = 0
    flags_assigned_count = 0
    
    for t, keys in groups.items():
        has_eg = any(k.startswith('EG_') for k in keys)
        has_sa = any(not k.startswith('EG_') for k in keys)
        
        countries = []
        if has_sa: countries.append('sa')
        if has_eg: countries.append('eg')
        
        best_image = ''
        for k in keys:
            img = db[k].get('image_url')
            if img and img != 'No Image':
                best_image = img.strip()
                break
                
        for k in keys:
            db[k]['countries'] = countries
            flags_assigned_count += 1
            
            current_img = db[k].get('image_url')
            if (not current_img or current_img.strip() == 'No Image' or current_img.strip() == '') and best_image:
                db[k]['image_url'] = best_image
                shared_images_count += 1

    new_content = prefix + json.dumps(db, ensure_ascii=False, indent=4) + ';\n'
    with open('drugDatabase.js', 'w', encoding='utf-8') as f:
        f.write(new_content)
        
    print(f"Assigned countries to {flags_assigned_count} drugs.")
    print(f"Shared images for {shared_images_count} drugs.")

if __name__ == '__main__':
    main()
