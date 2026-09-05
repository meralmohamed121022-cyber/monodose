import re

def rewrite_file():
    try:
        with open('index.html', 'r', encoding='utf-8') as f:
            content = f.read()
    except Exception as e:
        with open('index.html', 'r', encoding='windows-1256') as f:
            content = f.read()
            
    # 1. Lightning Render
    # Find lightningRender from `drugItem.innerHTML = \`` to ``;``
    pat = r'drugItem\.innerHTML = `(.*?)`;'
    
    # Wait, the inner HTML of drugItem
    # I can just find the exact block and replace it using a more relaxed regex
    
    # We'll just replace the inner content of drugItem.innerHTML = `...`
    # Let's find: `<div class="drug-name">${drug.tradeName}</div>`
    
    def repl_lightning(m):
        return r"""drugItem.innerHTML = `
<div style="display: flex; gap: 15px; align-items: flex-start;">
    <div style="flex-shrink: 0; width: 60px; height: 60px; background: white; border-radius: 12px; box-shadow: 0 2px 5px rgba(0,0,0,0.1); display: flex; align-items: center; justify-content: center; overflow: hidden; border: 1px solid #eee;">
        <img src="${drug.image_url || 'data:image/svg+xml,%3Csvg xmlns=\\\'http://www.w3.org/2000/svg\\\' viewBox=\\\'0 0 24 24\\\' fill=\\\'%23ccc\\\'%3E%3Cpath d=\\\'M19 8h-1.18c-.31-1.28-1.28-2.25-2.56-2.56V4.26C15.26 3 14 1.74 12 1.74S8.74 3 8.74 4.26V5.44C7.46 5.75 6.49 6.72 6.18 8H5c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2h1.18c.31 1.28 1.28 2.25 2.56 2.56v1.18C8.74 19 10 20.26 12 20.26s3.26-1.26 3.26-2.52v-1.18c1.28-.31 2.25-1.28 2.56-2.56H19c1.1 0 2-.9 2-2v-2c0-1.1-.9-2-2-2zM12 3.74c1.1 0 1.26 1.1 1.26 1.1v.6H10.74v-.6s.16-1.1 1.26-1.1zM10.74 18.26c0 1.1 1.1 1.1 1.1 1.1s1.1 0 1.1-1.1v-.6H10.74v.6zM20 12c0 .55-.45 1-1 1h-1.74c-.18.66-.52 1.25-.97 1.74-1.03 1.13-2.51 1.76-4.08 1.76s-3.05-.63-4.08-1.76c-.45-.49-.79-1.08-.97-1.74H5c-.55 0-1-.45-1-1v-2c0-.55.45-1 1-1h1.74c.18-.66.52-1.25.97-1.74 1.03-1.13 2.51-1.76 4.08-1.76s3.05.63 4.08 1.76c.45.49.79 1.08.97 1.74H19c.55 0 1 .45 1 1v2z\\\'/%3E%3C/svg%3E'}" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=\\\'http://www.w3.org/2000/svg\\\' viewBox=\\\'0 0 24 24\\\' fill=\\\'%23ccc\\\'%3E%3Cpath d=\\\'M19 8h-1.18c-.31-1.28-1.28-2.25-2.56-2.56V4.26C15.26 3 14 1.74 12 1.74S8.74 3 8.74 4.26V5.44C7.46 5.75 6.49 6.72 6.18 8H5c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2h1.18c.31 1.28 1.28 2.25 2.56 2.56v1.18C8.74 19 10 20.26 12 20.26s3.26-1.26 3.26-2.52v-1.18c1.28-.31 2.25-1.28 2.56-2.56H19c1.1 0 2-.9 2-2v-2c0-1.1-.9-2-2-2zM12 3.74c1.1 0 1.26 1.1 1.26 1.1v.6H10.74v-.6s.16-1.1 1.26-1.1zM10.74 18.26c0 1.1 1.1 1.1 1.1 1.1s1.1 0 1.1-1.1v-.6H10.74v.6zM20 12c0 .55-.45 1-1 1h-1.74c-.18.66-.52 1.25-.97 1.74-1.03 1.13-2.51 1.76-4.08 1.76s-3.05-.63-4.08-1.76c-.45-.49-.79-1.08-.97-1.74H5c-.55 0-1-.45-1-1v-2c0-.55.45-1 1-1h1.74c.18-.66.52-1.25.97-1.74 1.03-1.13 2.51-1.76 4.08-1.76s3.05.63 4.08 1.76c.45.49.79 1.08.97 1.74H19c.55 0 1 .45 1 1v2z\\\'/%3E%3C/svg%3E'; this.style.opacity='0.5'" style="max-width: 100%; max-height: 100%; object-fit: contain; opacity: ${drug.image_url ? '1' : '0.5'};">
    </div>
    <div style="flex: 1; min-width: 0;">
""" + m.group(1) + r"""
    </div>
</div>
`;"""

    content = re.sub(r'drugItem\.innerHTML = `(.*?)`;', repl_lightning, content, flags=re.DOTALL)
    
    # 2. Fix generate functions (similar/alternative/related)
    pat_gen = r'let html = (.*?)\.map\(item => `(.*?)`\)\.join\(\'\'\);'
    def repl_gen(m):
        arr_name = m.group(1)
        inner_html = m.group(2)
        # We need to wrap the inner HTML with the flex container and image
        # Inner html starts with <div class="related-drug" onclick="...">
        # We need to extract the starting div tag to keep the onclick working
        
        start_div_match = re.match(r'\s*(<div class="related-drug"[^>]*>)\s*(.*)', inner_html, flags=re.DOTALL)
        if start_div_match:
            start_tag = start_div_match.group(1)
            # Add flex styling to the start tag
            start_tag = start_tag[:-1] + ' style="display: flex; gap: 12px; align-items: center;">'
            inner_content = start_div_match.group(2)
        else:
            start_tag = '<div class="related-drug">'
            inner_content = inner_html
            
        return f"""let html = {arr_name}.map(item => {{
const defaultImg = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23ccc'%3E%3Cpath d='M19 8h-1.18c-.31-1.28-1.28-2.25-2.56-2.56V4.26C15.26 3 14 1.74 12 1.74S8.74 3 8.74 4.26V5.44C7.46 5.75 6.49 6.72 6.18 8H5c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2h1.18c.31 1.28 1.28 2.25 2.56 2.56v1.18C8.74 19 10 20.26 12 20.26s3.26-1.26 3.26-2.52v-1.18c1.28-.31 2.25-1.28 2.56-2.56H19c1.1 0 2-.9 2-2v-2c0-1.1-.9-2-2-2zM12 3.74c1.1 0 1.26 1.1 1.26 1.1v.6H10.74v-.6s.16-1.1 1.26-1.1zM10.74 18.26c0 1.1 1.1 1.1 1.1 1.1s1.1 0 1.1-1.1v-.6H10.74v.6zM20 12c0 .55-.45 1-1 1h-1.74c-.18.66-.52 1.25-.97 1.74-1.03 1.13-2.51 1.76-4.08 1.76s-3.05-.63-4.08-1.76c-.45-.49-.79-1.08-.97-1.74H5c-.55 0-1-.45-1-1v-2c0-.55.45-1 1-1h1.74c.18-.66.52-1.25.97-1.74 1.03-1.13 2.51-1.76 4.08-1.76s3.05.63 4.08 1.76c.45.49.79 1.08.97 1.74H19c.55 0 1 .45 1 1v2z'/%3E%3C/svg%3E";
const imgSrc = item.drug.image_url ? item.drug.image_url : defaultImg;
return `
{start_tag}
    <div style="flex-shrink: 0; width: 50px; height: 50px; background: white; border-radius: 8px; border: 1px solid #eee; display: flex; align-items: center; justify-content: center; overflow: hidden; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
        <img src="${{imgSrc}}" onerror="this.src='${{defaultImg}}'; this.style.opacity='0.5'" style="max-width: 100%; max-height: 100%; object-fit: contain; opacity: ${{item.drug.image_url ? '1' : '0.5'}};">
    </div>
    <div style="flex: 1; min-width: 0;">
        {inner_content}
    </div>
</div>
`;
}}).join('');"""

    content = re.sub(pat_gen, repl_gen, content, flags=re.DOTALL)
    
    with open('index.html', 'w', encoding='utf-8') as f:
        f.write(content)
    
    print("Done rewriting.")
    
rewrite_file()
