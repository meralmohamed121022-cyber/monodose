import re

def main():
    try:
        with open('index.html', 'r', encoding='utf-8') as f:
            content = f.read()
    except:
        with open('index.html', 'r', encoding='windows-1256') as f:
            content = f.read()

    # We need to target the SECOND definitions which have `sort(sortByMinAge)`
    
    # 1. Patch Similar
    pattern_similar = r"content\.innerHTML\s*=\s*similar\.map\(item\s*=>\s*\{([\s\S]*?)\}\)\.join\(''\);"
    replacement_similar = r"""
        let html = similar.slice(0, 30).map(item => {\1}).join('');
        if (similar.length > 30) {
            html += `<div class="related-drug" style="text-align:center; padding: 15px; font-weight:bold; color:#666;">+ ${similar.length - 30} more items not shown for performance</div>`;
        }
        content.innerHTML = html;
"""
    content = re.sub(pattern_similar, replacement_similar, content)

    # 2. Patch Alternatives
    pattern_alt = r"content\.innerHTML\s*=\s*alternatives\.map\(item\s*=>\s*\{([\s\S]*?)\}\)\.join\(''\);"
    replacement_alt = r"""
        let html = alternatives.slice(0, 30).map(item => {\1}).join('');
        if (alternatives.length > 30) {
            html += `<div class="related-drug" style="text-align:center; padding: 15px; font-weight:bold; color:#666;">+ ${alternatives.length - 30} more items not shown for performance</div>`;
        }
        content.innerHTML = html;
"""
    content = re.sub(pattern_alt, replacement_alt, content)

    # 3. Patch Related
    pattern_rel = r"content\.innerHTML\s*=\s*related\.map\(item\s*=>\s*\{([\s\S]*?)\}\)\.join\(''\);"
    replacement_rel = r"""
        let html = related.slice(0, 30).map(item => {\1}).join('');
        if (related.length > 30) {
            html += `<div class="related-drug" style="text-align:center; padding: 15px; font-weight:bold; color:#666;">+ ${related.length - 30} more items not shown for performance</div>`;
        }
        content.innerHTML = html;
"""
    content = re.sub(pattern_rel, replacement_rel, content)

    with open('index.html', 'w', encoding='utf-8') as f:
        f.write(content)

    print("Second performance fix applied successfully!")

if __name__ == '__main__':
    main()
