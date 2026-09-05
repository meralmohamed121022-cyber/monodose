import sys
import re

sys.stdout.reconfigure(encoding='utf-8')
with open('index.html', encoding='utf-8') as f:
    c = f.read()

# Replace ANY related-drug div in the maps with the image layout
def replace_related(m):
    return """return `
            <div class="related-drug" onclick="showDrugDetail('${item.key}')" style="display: block; min-height: 60px;">
                <div style="float: right; margin-left: 12px; margin-bottom: 5px; width: 60px; height: 60px; background: white; border-radius: 8px; border: 1px solid #eee; display: flex; align-items: center; justify-content: center; overflow: hidden; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
                    <img src="${item.drug.image_url || 'data:image/svg+xml,%3Csvg xmlns=\\\'http://www.w3.org/2000/svg\\\' viewBox=\\\'0 0 24 24\\\' fill=\\\'%23ccc\\\'%3E%3Cpath d=\\\'M19 8h-1.18c-.31-1.28-1.28-2.25-2.56-2.56V4.26C15.26 3 14 1.74 12 1.74S8.74 3 8.74 4.26V5.44C7.46 5.75 6.49 6.72 6.18 8H5c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2h1.18c.31 1.28 1.28 2.25 2.56 2.56v1.18C8.74 19 10 20.26 12 20.26s3.26-1.26 3.26-2.52v-1.18c1.28-.31 2.25-1.28 2.56-2.56H19c1.1 0 2-.9 2-2v-2c0-1.1-.9-2-2-2zM12 3.74c1.1 0 1.26 1.1 1.26 1.1v.6H10.74v-.6s.16-1.1 1.26-1.1zM10.74 18.26c0 1.1 1.1 1.1 1.1 1.1s1.1 0 1.1-1.1v-.6H10.74v.6zM20 12c0 .55-.45 1-1 1h-1.74c-.18.66-.52 1.25-.97 1.74-1.03 1.13-2.51 1.76-4.08 1.76s-3.05-.63-4.08-1.76c-.45-.49-.79-1.08-.97-1.74H5c-.55 0-1-.45-1-1v-2c0-.55.45-1 1-1h1.74c.18-.66.52-1.25.97-1.74 1.03-1.13 2.51-1.76 4.08-1.76s3.05.63 4.08 1.76c.45.49.79 1.08.97 1.74H19c.55 0 1 .45 1 1v2z\\\'/%3E%3C/svg%3E'}" onerror="this.style.opacity='0.5'" style="max-width: 100%; max-height: 100%; object-fit: contain; opacity: ${item.drug.image_url ? '1' : '0.5'};">
                </div>
                <div class="related-drug-name">${item.drug.tradeName}</div>
                <div class="related-drug-comp">${item.drug.composition}</div>
                ${item.drug.subCategory ? `<div class="related-drug-cat" style="font-size: 0.8em; color: #999;">${item.drug.subCategory}</div>` : ''}
                <div class="drug-extra-info" style="display: flex; gap: 6px; flex-wrap: wrap; margin-top: 8px;">
                    ${item.drug.minAge ? `<span style="display: inline-flex; align-items: center; gap: 4px; background: #4caf50; color: white; padding: 3px 8px; border-radius: 12px; font-size: 11px; font-weight: bold;">👶 ${item.drug.minAge}</span>` : ''}
                    ${item.drug.pregnancyCategory ? `<span style="display: inline-flex; align-items: center; gap: 4px; background: #e91e63; color: white; padding: 3px 8px; border-radius: 12px; font-size: 11px; font-weight: bold;">🤰 ${item.drug.pregnancyCategory}</span>` : ''}
                    ${item.drug.breastfeedingCategory ? `<span style="display: inline-flex; align-items: center; gap: 4px; background: #8bc34a; color: white; padding: 3px 8px; border-radius: 12px; font-size: 11px; font-weight: bold;">🤱 ${item.drug.breastfeedingCategory}</span>` : ''}
                </div>
            </div>
        `"""

# We target the .map(item => { ... return `...` }) in the 3 functions.
# First find the map block for similar
c = re.sub(
    r"return\s*`\s*<div class=\"related-drug\" onclick=\"showDrugDetail\('\$\{item\.key\}'\)\">\s*<div class=\"related-drug-name\">\$\{item\.drug\.tradeName\}</div>\s*<div class=\"related-drug-comp\">\$\{item\.drug\.composition\}</div>\s*<div class=\"drug-extra-info\".*?</div>\s*</div>\s*`",
    replace_related,
    c,
    flags=re.DOTALL
)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(c)

print('Images added to all related cards.')
