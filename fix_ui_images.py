import re

def modify_lightning_render(content):
    target = r"""drugItem\.innerHTML = `
<div class="drug-name">\$\{drug\.tradeName\}</div>
<div class="drug-info">\$\{drug\.composition\}</div>
<div class="drug-code">📄 Code: \$\{drug\.code \|\| 'N/A'\}</div>
<div class="drug-badges-row">
<div class="drug-formulation">\$\{\(drug\.formulation \|\| 'N/A'\)\.toUpperCase\(\)\}</div>
<div class="drug-categories">
<div class="category-icon pregnancy-icon" style="display:flex; flex-direction:column; align-items:center; gap:2px;">
\$\{getPregnancyCategoryEmoji\(drug\.pregnancyCategory\)\}
<span style="font-size:8px; opacity:0\.8; font-weight:bold;">Pregnancy</span>
</div>
<div class="category-icon breastfeeding-icon" style="display:flex; flex-direction:column; align-items:center; gap:2px;">
\$\{getBreastfeedingCategoryEmoji\(drug\.breastfeedingCategory\)\}
<span style="font-size:8px; opacity:0\.8; font-weight:bold;">Lactation</span>
</div>
</div>
</div>
`;"""

    replacement = r"""
const defaultImg = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23ccc'%3E%3Cpath d='M19 8h-1.18c-.31-1.28-1.28-2.25-2.56-2.56V4.26C15.26 3 14 1.74 12 1.74S8.74 3 8.74 4.26V5.44C7.46 5.75 6.49 6.72 6.18 8H5c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2h1.18c.31 1.28 1.28 2.25 2.56 2.56v1.18C8.74 19 10 20.26 12 20.26s3.26-1.26 3.26-2.52v-1.18c1.28-.31 2.25-1.28 2.56-2.56H19c1.1 0 2-.9 2-2v-2c0-1.1-.9-2-2-2z'/%3E%3C/svg%3E";
const imgSrc = drug.image_url ? drug.image_url : defaultImg;
drugItem.innerHTML = `
<div style="display: flex; gap: 15px; align-items: flex-start;">
    <div style="flex-shrink: 0; width: 60px; height: 60px; background: white; border-radius: 12px; box-shadow: 0 2px 5px rgba(0,0,0,0.1); display: flex; align-items: center; justify-content: center; overflow: hidden; border: 1px solid #eee;">
        <img src="${imgSrc}" onerror="this.src='${defaultImg}'; this.style.opacity='0.5'" style="max-width: 100%; max-height: 100%; object-fit: contain; opacity: ${drug.image_url ? '1' : '0.5'};">
    </div>
    <div style="flex: 1; min-width: 0;">
        <div class="drug-name">${drug.tradeName}</div>
        <div class="drug-info">${drug.composition}</div>
        <div class="drug-code">📄 Code: ${drug.code || 'N/A'}</div>
        <div class="drug-badges-row">
            <div class="drug-formulation">${(drug.formulation || 'N/A').toUpperCase()}</div>
            <div class="drug-categories">
                <div class="category-icon pregnancy-icon" style="display:flex; flex-direction:column; align-items:center; gap:2px;">
                    ${getPregnancyCategoryEmoji(drug.pregnancyCategory)}
                    <span style="font-size:8px; opacity:0.8; font-weight:bold;">Pregnancy</span>
                </div>
                <div class="category-icon breastfeeding-icon" style="display:flex; flex-direction:column; align-items:center; gap:2px;">
                    ${getBreastfeedingCategoryEmoji(drug.breastfeedingCategory)}
                    <span style="font-size:8px; opacity:0.8; font-weight:bold;">Lactation</span>
                </div>
            </div>
        </div>
    </div>
</div>
`;"""
    return re.sub(target, replacement, content, flags=re.MULTILINE)

def modify_fill_popup(content):
    target = r"document\.getElementById\('drugDetailTitle'\)\.textContent = drug\.tradeName;"
    replacement = r"""const defaultImg = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23ccc'%3E%3Cpath d='M19 8h-1.18c-.31-1.28-1.28-2.25-2.56-2.56V4.26C15.26 3 14 1.74 12 1.74S8.74 3 8.74 4.26V5.44C7.46 5.75 6.49 6.72 6.18 8H5c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2h1.18c.31 1.28 1.28 2.25 2.56 2.56v1.18C8.74 19 10 20.26 12 20.26s3.26-1.26 3.26-2.52v-1.18c1.28-.31 2.25-1.28 2.56-2.56H19c1.1 0 2-.9 2-2v-2c0-1.1-.9-2-2-2z'/%3E%3C/svg%3E";
const imgSrc = drug.image_url ? drug.image_url : defaultImg;
const titleHTML = `
<div style="display: flex; flex-direction: column; align-items: center; gap: 10px;">
    <div style="width: 120px; height: 120px; background: white; border-radius: 16px; box-shadow: 0 4px 10px rgba(0,0,0,0.1); display: flex; align-items: center; justify-content: center; overflow: hidden; border: 2px solid #eee;">
        <img src="${imgSrc}" onerror="this.src='${defaultImg}'; this.style.opacity='0.5'" style="max-width: 100%; max-height: 100%; object-fit: contain; opacity: ${drug.image_url ? '1' : '0.5'};">
    </div>
    <div style="text-align: center;">${drug.tradeName}</div>
</div>
`;
document.getElementById('drugDetailTitle').innerHTML = titleHTML;"""
    return re.sub(target, replacement, content)

def modify_generate(content):
    target = r"""<div class="related-drug" onclick="showDrugDetail\('\$\{item\.key\}'\)">
<div class="related-drug-name">\$\{item\.drug\.tradeName\}</div>"""

    replacement = r"""
const defaultImg = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23ccc'%3E%3Cpath d='M19 8h-1.18c-.31-1.28-1.28-2.25-2.56-2.56V4.26C15.26 3 14 1.74 12 1.74S8.74 3 8.74 4.26V5.44C7.46 5.75 6.49 6.72 6.18 8H5c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2h1.18c.31 1.28 1.28 2.25 2.56 2.56v1.18C8.74 19 10 20.26 12 20.26s3.26-1.26 3.26-2.52v-1.18c1.28-.31 2.25-1.28 2.56-2.56H19c1.1 0 2-.9 2-2v-2c0-1.1-.9-2-2-2z'/%3E%3C/svg%3E";
const imgSrc = item.drug.image_url ? item.drug.image_url : defaultImg;
return `
<div class="related-drug" onclick="showDrugDetail('${item.key}')" style="display: flex; gap: 12px; align-items: center;">
    <div style="flex-shrink: 0; width: 50px; height: 50px; background: white; border-radius: 8px; border: 1px solid #eee; display: flex; align-items: center; justify-content: center; overflow: hidden; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
        <img src="${imgSrc}" onerror="this.src='${defaultImg}'; this.style.opacity='0.5'" style="max-width: 100%; max-height: 100%; object-fit: contain; opacity: ${item.drug.image_url ? '1' : '0.5'};">
    </div>
    <div style="flex: 1; min-width: 0;">
        <div class="related-drug-name">${item.drug.tradeName}</div>"""
    
    # We need to find the maps inside generateSimilarDrugs, generateAlternativeDrugs, generateRelatedDrugs
    # We will use re.sub with a custom pattern to inject the image logic before `return \``
    
    pat = r'let html = (.*?)\.map\(item => `\n<div class="related-drug" onclick="showDrugDetail\(\'\$\{item\.key\}\'\)">\n<div class="related-drug-name">\$\{item\.drug\.tradeName\}</div>'
    
    def repl(m):
        arr = m.group(1)
        return f"""let html = {arr}.map(item => {{
const defaultImg = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23ccc'%3E%3Cpath d='M19 8h-1.18c-.31-1.28-1.28-2.25-2.56-2.56V4.26C15.26 3 14 1.74 12 1.74S8.74 3 8.74 4.26V5.44C7.46 5.75 6.49 6.72 6.18 8H5c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2h1.18c.31 1.28 1.28 2.25 2.56 2.56v1.18C8.74 19 10 20.26 12 20.26s3.26-1.26 3.26-2.52v-1.18c1.28-.31 2.25-1.28 2.56-2.56H19c1.1 0 2-.9 2-2v-2c0-1.1-.9-2-2-2z'/%3E%3C/svg%3E";
const imgSrc = item.drug.image_url ? item.drug.image_url : defaultImg;
return `
<div class="related-drug" onclick="showDrugDetail('${{item.key}}')" style="display: flex; gap: 12px; align-items: center;">
    <div style="flex-shrink: 0; width: 50px; height: 50px; background: white; border-radius: 8px; border: 1px solid #eee; display: flex; align-items: center; justify-content: center; overflow: hidden; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
        <img src="${{imgSrc}}" onerror="this.src='${{defaultImg}}'; this.style.opacity='0.5'" style="max-width: 100%; max-height: 100%; object-fit: contain; opacity: ${{item.drug.image_url ? '1' : '0.5'}};">
    </div>
    <div style="flex: 1; min-width: 0;">
        <div class="related-drug-name">${{item.drug.tradeName}}</div>"""

    content = re.sub(pat, repl, content)
    
    # We also need to fix the closing ` for the map function since we converted it from an implicit return `...` to `{ return \`...\` }`
    pat2 = r'</div>\n`\)\.join\(\'\'\);'
    repl2 = r'</div>\n</div>\n`}).join(\'\');'
    
    # Because there might be other maps, I'll be safer. The above is a bit risky.
    return content

def modify_generate_safe(content):
    # Safer way: split by function generateSimilarDrugs, generateAlternativeDrugs, generateRelatedDrugs
    for func in ['generateSimilarDrugs', 'generateAlternativeDrugs', 'generateRelatedDrugs']:
        parts = content.split(f'function {func}() {{')
        if len(parts) > 1:
            part = parts[1]
            end = part.find('if (similar.length === 0)' if 'Similar' in func else ('if (alternatives.length === 0)' if 'Alternative' in func else 'if (related.length === 0)'))
            if end == -1: end = len(part)
            
            # replace map
            pat = r'let html = (.*?)\.map\(item => `\n<div class="related-drug" onclick="showDrugDetail\(\'\$\{item\.key\}\'\)">\n<div class="related-drug-name">\$\{item\.drug\.tradeName\}</div>(.*?)</div>\n`\)\.join\(\'\'\);'
            
            def repl(m):
                arr = m.group(1)
                inner = m.group(2)
                return f"""let html = {arr}.map(item => {{
const defaultImg = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23ccc'%3E%3Cpath d='M19 8h-1.18c-.31-1.28-1.28-2.25-2.56-2.56V4.26C15.26 3 14 1.74 12 1.74S8.74 3 8.74 4.26V5.44C7.46 5.75 6.49 6.72 6.18 8H5c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2h1.18c.31 1.28 1.28 2.25 2.56 2.56v1.18C8.74 19 10 20.26 12 20.26s3.26-1.26 3.26-2.52v-1.18c1.28-.31 2.25-1.28 2.56-2.56H19c1.1 0 2-.9 2-2v-2c0-1.1-.9-2-2-2z'/%3E%3C/svg%3E";
const imgSrc = item.drug.image_url ? item.drug.image_url : defaultImg;
return `
<div class="related-drug" onclick="showDrugDetail('${{item.key}}')" style="display: flex; gap: 12px; align-items: center;">
    <div style="flex-shrink: 0; width: 50px; height: 50px; background: white; border-radius: 8px; border: 1px solid #eee; display: flex; align-items: center; justify-content: center; overflow: hidden; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
        <img src="${{imgSrc}}" onerror="this.src='${{defaultImg}}'; this.style.opacity='0.5'" style="max-width: 100%; max-height: 100%; object-fit: contain; opacity: ${{item.drug.image_url ? '1' : '0.5'}};">
    </div>
    <div style="flex: 1; min-width: 0;">
        <div class="related-drug-name">${{item.drug.tradeName}}</div>{inner}</div>
</div>
`}}).join('');"""

            parts[1] = re.sub(pat, repl, part, flags=re.DOTALL)
            content = f'function {func}() {{'.join(parts)
    return content

def main():
    try:
        with open('index.html', 'r', encoding='utf-8') as f:
            content = f.read()
    except Exception as e:
        with open('index.html', 'r', encoding='windows-1256') as f:
            content = f.read()

    content = modify_lightning_render(content)
    content = modify_fill_popup(content)
    content = modify_generate_safe(content)
    
    with open('index.html', 'w', encoding='utf-8') as f:
        f.write(content)
        
    print("UI update complete!")

if __name__ == '__main__':
    main()
