import re

def main():
    try:
        with open('index.html', 'r', encoding='utf-8') as f:
            content = f.read()
    except:
        with open('index.html', 'r', encoding='windows-1256') as f:
            content = f.read()

    # The buggy HTML block is identical in all 3 functions.
    # It starts with <div class="drug-extra-info" and ends with </div> just before </div> // end of related-drug
    
    # We want to replace the entire <div class="drug-extra-info">...</div> inside the backticks.
    pattern = r'<div class="drug-extra-info"[\s\S]*?</div>\s*</div>'
    
    replacement = r"""<div class="drug-extra-info" style="display: flex; gap: 6px; flex-wrap: wrap; margin-top: 8px;">
<span style="display: inline-flex; align-items: center; gap: 4px; background: #4caf50; color: white; padding: 3px 8px; border-radius: 12px; font-size: 11px; font-weight: bold; box-shadow: 0 1px 3px rgba(0,0,0,0.2);">
👶 ${item.drug.minAge || 'N/A'}
</span>
<span style="display: inline-flex; align-items: center; gap: 4px; background: #e91e63; color: white; padding: 3px 8px; border-radius: 12px; font-size: 11px; font-weight: bold; box-shadow: 0 1px 3px rgba(0,0,0,0.2);">
🤰 ${item.drug.pregnancyCategory || 'N/A'}
</span>
<span style="display: inline-flex; align-items: center; gap: 4px; background: #8bc34a; color: white; padding: 3px 8px; border-radius: 12px; font-size: 11px; font-weight: bold; box-shadow: 0 1px 3px rgba(0,0,0,0.2);">
🤱 ${item.drug.breastfeedingCategory || 'N/A'}
</span>
</div>
</div>"""

    content = re.sub(pattern, replacement, content)

    with open('index.html', 'w', encoding='utf-8') as f:
        f.write(content)

    print("Badges fixed successfully!")

if __name__ == '__main__':
    main()
