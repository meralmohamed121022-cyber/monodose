import sys

try:
    with open('index.html', 'r', encoding='utf-8') as f:
        content = f.read()
except:
    with open('index.html', 'r', encoding='windows-1256') as f:
        content = f.read()

# 1. Fix lightningRender
target_lightning = '''drugItem.innerHTML = `
<div class="drug-name">${drug.tradeName}</div>
<div class="drug-info">${drug.composition}</div>
<div class="drug-code">📄 Code: ${drug.code || 'N/A'}</div>'''

repl_lightning = '''
const defaultImg = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23ccc'%3E%3Cpath d='M19 8h-1.18c-.31-1.28-1.28-2.25-2.56-2.56V4.26C15.26 3 14 1.74 12 1.74S8.74 3 8.74 4.26V5.44C7.46 5.75 6.49 6.72 6.18 8H5c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2h1.18c.31 1.28 1.28 2.25 2.56 2.56v1.18C8.74 19 10 20.26 12 20.26s3.26-1.26 3.26-2.52v-1.18c1.28-.31 2.25-1.28 2.56-2.56H19c1.1 0 2-.9 2-2v-2c0-1.1-.9-2-2-2zM12 3.74c1.1 0 1.26 1.1 1.26 1.1v.6H10.74v-.6s.16-1.1 1.26-1.1zM10.74 18.26c0 1.1 1.1 1.1 1.1 1.1s1.1 0 1.1-1.1v-.6H10.74v.6zM20 12c0 .55-.45 1-1 1h-1.74c-.18.66-.52 1.25-.97 1.74-1.03 1.13-2.51 1.76-4.08 1.76s-3.05-.63-4.08-1.76c-.45-.49-.79-1.08-.97-1.74H5c-.55 0-1-.45-1-1v-2c0-.55.45-1 1-1h1.74c.18-.66.52-1.25.97-1.74 1.03-1.13 2.51-1.76 4.08-1.76s3.05.63 4.08 1.76c.45.49.79 1.08.97 1.74H19c.55 0 1 .45 1 1v2z'/%3E%3C/svg%3E";
const imgSrc = drug.image_url ? drug.image_url : defaultImg;
drugItem.innerHTML = `
<div style="display: flex; gap: 15px; align-items: flex-start;">
    <div style="flex-shrink: 0; width: 60px; height: 60px; background: white; border-radius: 12px; box-shadow: 0 2px 5px rgba(0,0,0,0.1); display: flex; align-items: center; justify-content: center; overflow: hidden; border: 1px solid #eee;">
        <img src="${imgSrc}" onerror="this.src='${defaultImg}'; this.style.opacity='0.5'" style="max-width: 100%; max-height: 100%; object-fit: contain; opacity: ${drug.image_url ? '1' : '0.5'};">
    </div>
    <div style="flex: 1; min-width: 0;">
        <div class="drug-name">${drug.tradeName}</div>
        <div class="drug-info">${drug.composition}</div>
        <div class="drug-code">📄 Code: ${drug.code || 'N/A'}</div>'''

if target_lightning in content:
    content = content.replace(target_lightning, repl_lightning)
    
target_close_lightning = '''<span style="font-size:8px; opacity:0.8; font-weight:bold;">Lactation</span>
</div>
</div>
</div>
`;'''

repl_close_lightning = '''<span style="font-size:8px; opacity:0.8; font-weight:bold;">Lactation</span>
</div>
</div>
</div>
</div>
</div>
`;'''
if repl_lightning in content and repl_close_lightning not in content:
    content = content.replace(target_close_lightning, repl_close_lightning)

# 2. Fix generate functions
target_gen = '''let html = similar.slice(0, 100).map(item => `
<div class="related-drug" onclick="showDrugDetail('${item.key}')">
<div class="related-drug-name">${item.drug.tradeName}</div>'''

repl_gen = '''let html = similar.slice(0, 100).map(item => {
const defaultImg = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23ccc'%3E%3Cpath d='M19 8h-1.18c-.31-1.28-1.28-2.25-2.56-2.56V4.26C15.26 3 14 1.74 12 1.74S8.74 3 8.74 4.26V5.44C7.46 5.75 6.49 6.72 6.18 8H5c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2h1.18c.31 1.28 1.28 2.25 2.56 2.56v1.18C8.74 19 10 20.26 12 20.26s3.26-1.26 3.26-2.52v-1.18c1.28-.31 2.25-1.28 2.56-2.56H19c1.1 0 2-.9 2-2v-2c0-1.1-.9-2-2-2zM12 3.74c1.1 0 1.26 1.1 1.26 1.1v.6H10.74v-.6s.16-1.1 1.26-1.1zM10.74 18.26c0 1.1 1.1 1.1 1.1 1.1s1.1 0 1.1-1.1v-.6H10.74v.6zM20 12c0 .55-.45 1-1 1h-1.74c-.18.66-.52 1.25-.97 1.74-1.03 1.13-2.51 1.76-4.08 1.76s-3.05-.63-4.08-1.76c-.45-.49-.79-1.08-.97-1.74H5c-.55 0-1-.45-1-1v-2c0-.55.45-1 1-1h1.74c.18-.66.52-1.25.97-1.74 1.03-1.13 2.51-1.76 4.08-1.76s3.05.63 4.08 1.76c.45.49.79 1.08.97 1.74H19c.55 0 1 .45 1 1v2z'/%3E%3C/svg%3E";
const imgSrc = item.drug.image_url ? item.drug.image_url : defaultImg;
return `
<div class="related-drug" onclick="showDrugDetail('${item.key}')" style="display: flex; gap: 12px; align-items: center;">
    <div style="flex-shrink: 0; width: 50px; height: 50px; background: white; border-radius: 8px; border: 1px solid #eee; display: flex; align-items: center; justify-content: center; overflow: hidden; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
        <img src="${imgSrc}" onerror="this.src='${defaultImg}'; this.style.opacity='0.5'" style="max-width: 100%; max-height: 100%; object-fit: contain; opacity: ${item.drug.image_url ? '1' : '0.5'};">
    </div>
    <div style="flex: 1; min-width: 0;">
        <div class="related-drug-name">${item.drug.tradeName}</div>'''

target_gen_alt = target_gen.replace('similar', 'alternatives')
repl_gen_alt = repl_gen.replace('similar', 'alternatives')
target_gen_rel = target_gen.replace('similar', 'related')
repl_gen_rel = repl_gen.replace('similar', 'related')

content = content.replace(target_gen, repl_gen)
content = content.replace(target_gen_alt, repl_gen_alt)
content = content.replace(target_gen_rel, repl_gen_rel)

target_map_close = '''</span>
</div>
`).join('');'''

repl_map_close = '''</span>
</div>
</div>
</div>
`}).join('');'''

content = content.replace(target_map_close, repl_map_close)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)

print("Updates made!")
print("image_url count:", content.count('image_url'))
