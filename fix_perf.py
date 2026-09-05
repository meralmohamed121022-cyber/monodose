import re

def main():
    try:
        with open('index.html', 'r', encoding='utf-8') as f:
            content = f.read()
    except:
        with open('index.html', 'r', encoding='windows-1256') as f:
            content = f.read()

    # Patch Similar
    content = re.sub(
        r"content\.innerHTML\s*=\s*similar\.map\(\s*item\s*=>\s*`([\s\S]*?)`\)\.join\(''\);",
        r"""
        let html = similar.slice(0, 30).map(item => `\1`).join('');
        if (similar.length > 30) {
            html += `<div class="related-drug" style="text-align:center; padding: 15px; font-weight:bold; color:#666;">+ ${similar.length - 30} more items not shown for performance</div>`;
        }
        content.innerHTML = html;
        """,
        content
    )

    # Patch Alternatives
    content = re.sub(
        r"content\.innerHTML\s*=\s*alternatives\.map\(\s*item\s*=>\s*`([\s\S]*?)`\)\.join\(''\);",
        r"""
        let html = alternatives.slice(0, 30).map(item => `\1`).join('');
        if (alternatives.length > 30) {
            html += `<div class="related-drug" style="text-align:center; padding: 15px; font-weight:bold; color:#666;">+ ${alternatives.length - 30} more items not shown for performance</div>`;
        }
        content.innerHTML = html;
        """,
        content
    )

    # Patch Related
    content = re.sub(
        r"content\.innerHTML\s*=\s*related\.map\(\s*item\s*=>\s*`([\s\S]*?)`\)\.join\(''\);",
        r"""
        let html = related.slice(0, 30).map(item => `\1`).join('');
        if (related.length > 30) {
            html += `<div class="related-drug" style="text-align:center; padding: 15px; font-weight:bold; color:#666;">+ ${related.length - 30} more items not shown for performance</div>`;
        }
        content.innerHTML = html;
        """,
        content
    )

    with open('index.html', 'w', encoding='utf-8') as f:
        f.write(content)

    print("Performance fix applied successfully!")

if __name__ == '__main__':
    main()
