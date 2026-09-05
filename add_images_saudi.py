import json
import codecs

def main():
    print("Loading image URLs from master files...")
    image_dict = {}
    master_files = ['master1.json', 'master2.json', 'master3.json']
    
    for f in master_files:
        try:
            with codecs.open(f, 'r', 'utf-8-sig') as file:
                data = json.load(file)
                for item in data:
                    code = str(item.get('Code', '')).strip()
                    itemurl = item.get('itemurl')
                    if code and itemurl and itemurl != 'No Image':
                        image_dict[code] = itemurl
            print(f"Processed {f}")
        except Exception as e:
            print(f"Error processing {f}: {e}")
            
    print(f"Total unique images loaded: {len(image_dict)}")
    
    print("Updating saudi_database.json...")
    try:
        with codecs.open('saudi_database.json', 'r', 'utf-8') as f:
            saudi_db = json.load(f)
            
        updated_count = 0
        for key, drug in saudi_db.items():
            code = str(drug.get('code', '')).strip()
            if code in image_dict:
                drug['image_url'] = image_dict[code]
                updated_count += 1
            else:
                drug['image_url'] = ''
                
        with codecs.open('saudi_database.json', 'w', 'utf-8') as f:
            json.dump(saudi_db, f, ensure_ascii=False, indent=4)
            
        print(f"Updated {updated_count} drugs with images in saudi_database.json")
    except Exception as e:
        print(f"Error updating saudi_database.json: {e}")

if __name__ == '__main__':
    main()
