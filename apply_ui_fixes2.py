import sys
import re

sys.stdout.reconfigure(encoding='utf-8')
with open('index.html', encoding='utf-8') as f:
    c = f.read()

# 1. Add route and minAge next to formulation, and add spacing to icons
# Look for <div class="drug-badges-row">...</div> inside lightningRender
# It looks like:
# <div class="drug-formulation">${(drug.formulation || 'N/A').toUpperCase()}</div>
# <div class="drug-categories">
#     <div class="category-icon pregnancy-icon" style="display:flex; flex-direction:column; align-items:center; gap:2px;">

def replace_badges(m):
    return """<div class="drug-formulation">${(drug.formulation || 'N/A').toUpperCase()}</div>
                ${drug.route ? `<div style="background: #2196F3; color: white; padding: 2px 8px; border-radius: 12px; font-size: 11px; margin-left: 5px; font-weight: bold; display: flex; align-items: center;">${drug.route}</div>` : ''}
                ${drug.minAge ? `<div style="background: #4CAF50; color: white; padding: 2px 8px; border-radius: 12px; font-size: 11px; margin-left: 5px; font-weight: bold; display: flex; align-items: center;">${drug.minAge}</div>` : ''}
                <div class="drug-categories" style="gap: 15px;">
                    <div class="category-icon pregnancy-icon" style="display:flex; flex-direction:column; align-items:center; gap:2px; margin-left: 10px;">"""

c = re.sub(
    r'<div class="drug-formulation">\$\{\(drug\.formulation \|\| \'N/A\'\)\.toUpperCase\(\)\}<\/div>\s*<div class="drug-categories">\s*<div class="category-icon pregnancy-icon" style="display:flex; flex-direction:column; align-items:center; gap:2px;">',
    replace_badges,
    c
)

# 2. Add images to Alternative and Related drugs
# generateAlternativeDrugs
def replace_alt(m):
    return """content.innerHTML = alternatives.map(item => {
const defaultImg = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23ccc'%3E%3Cpath d='M19 8h-1.18c-.31-1.28-1.28-2.25-2.56-2.56V4.26C15.26 3 14 1.74 12 1.74S8.74 3 8.74 4.26V5.44C7.46 5.75 6.49 6.72 6.18 8H5c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2h1.18c.31 1.28 1.28 2.25 2.56 2.56v1.18C8.74 19 10 20.26 12 20.26s3.26-1.26 3.26-2.52v-1.18c1.28-.31 2.25-1.28 2.56-2.56H19c1.1 0 2-.9 2-2v-2c0-1.1-.9-2-2-2z'/%3E%3C/svg%3E";
const imgSrc = item.drug.image_url ? item.drug.image_url : defaultImg;
return `
            <div class="related-drug" onclick="showDrugDetail('${item.key}')" style="display: block; min-height: 60px;">
                <div style="float: right; margin-left: 12px; margin-bottom: 5px; width: 60px; height: 60px; background: white; border-radius: 8px; border: 1px solid #eee; display: flex; align-items: center; justify-content: center; overflow: hidden; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
                    <img src="${imgSrc}" onerror="this.src='${defaultImg}'; this.style.opacity='0.5'" style="max-width: 100%; max-height: 100%; object-fit: contain; opacity: ${item.drug.image_url ? '1' : '0.5'};">
                </div>
                <div class="related-drug-name">${item.drug.tradeName}</div>
                <div class="related-drug-comp">${item.drug.composition}</div>
                <div class="related-drug-cat" style="font-size: 0.8em; color: #999;">${item.drug.subCategory}</div>
            </div>
        `}).join('');"""

c = re.sub(
    r"content\.innerHTML = alternatives\.map\(item => `\s*<div class=\"related-drug\" onclick=\"showDrugDetail\('\$\{item\.key\}'\)\">\s*<div class=\"related-drug-name\">\$\{item\.drug\.tradeName\}</div>\s*<div class=\"related-drug-comp\">\$\{item\.drug\.composition\}</div>\s*<div class=\"related-drug-cat\" style=\"font-size: 0\.8em; color: #999;\">\$\{item\.drug\.subCategory\}</div>\s*</div>\s*`\)\.join\(''\);",
    replace_alt,
    c
)

# generateRelatedDrugs (Same Active Ingredient, etc)
def replace_rel(m):
    return """content.innerHTML = related.map(item => {
const defaultImg = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23ccc'%3E%3Cpath d='M19 8h-1.18c-.31-1.28-1.28-2.25-2.56-2.56V4.26C15.26 3 14 1.74 12 1.74S8.74 3 8.74 4.26V5.44C7.46 5.75 6.49 6.72 6.18 8H5c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2h1.18c.31 1.28 1.28 2.25 2.56 2.56v1.18C8.74 19 10 20.26 12 20.26s3.26-1.26 3.26-2.52v-1.18c1.28-.31 2.25-1.28 2.56-2.56H19c1.1 0 2-.9 2-2v-2c0-1.1-.9-2-2-2z'/%3E%3C/svg%3E";
const imgSrc = item.drug.image_url ? item.drug.image_url : defaultImg;
return `
            <div class="related-drug" onclick="showDrugDetail('${item.key}')" style="display: block; min-height: 60px;">
                <div style="float: right; margin-left: 12px; margin-bottom: 5px; width: 60px; height: 60px; background: white; border-radius: 8px; border: 1px solid #eee; display: flex; align-items: center; justify-content: center; overflow: hidden; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
                    <img src="${imgSrc}" onerror="this.src='${defaultImg}'; this.style.opacity='0.5'" style="max-width: 100%; max-height: 100%; object-fit: contain; opacity: ${item.drug.image_url ? '1' : '0.5'};">
                </div>
                <div class="related-drug-name">${item.drug.tradeName}</div>
                <div class="related-drug-comp">${item.drug.composition}</div>
            </div>
        `}).join('');"""

c = re.sub(
    r"content\.innerHTML = related\.map\(item => `\s*<div class=\"related-drug\" onclick=\"showDrugDetail\('\$\{item\.key\}'\)\">\s*<div class=\"related-drug-name\">\$\{item\.drug\.tradeName\}</div>\s*<div class=\"related-drug-comp\">\$\{item\.drug\.composition\}</div>\s*</div>\s*`\)\.join\(''\);",
    replace_rel,
    c
)


# 3. Add End of results message to lightningRender
# Find lightningRender's if (drugs.length > maxRender) 
# and add an else block.
def replace_end(m):
    return """if (drugs.length > maxRender) {
                    const moreIndicator = document.createElement('div');
                    moreIndicator.className = 'more-results-indicator';
                    moreIndicator.innerHTML = `
            <div style="text-align: center; padding: 15px; background: #e3f2fd; color: #1976d2; border-radius: 8px; margin: 10px 0; cursor: pointer; font-weight: bold;" onclick="showMoreResults()">
                👇 عرض المزيد (${drugs.length - maxRender} متبقي)
            </div>
        `;
                    drugList.appendChild(moreIndicator);
                } else if (drugs.length > 0) {
                    const endIndicator = document.createElement('div');
                    endIndicator.innerHTML = `
            <div style="text-align: center; padding: 15px; color: #9e9e9e; margin: 10px 0; font-size: 14px;">
                ✅ هذه هي جميع النتائج
            </div>
        `;
                    drugList.appendChild(endIndicator);
                }"""

c = re.sub(
    r"if \(drugs\.length > maxRender\) \{.*?drugList\.appendChild\(moreIndicator\);\s*\}",
    replace_end,
    c,
    flags=re.DOTALL
)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(c)

print('Modifications applied.')
