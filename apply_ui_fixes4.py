import sys
import re

sys.stdout.reconfigure(encoding='utf-8')
with open('index.html', encoding='utf-8') as f:
    c = f.read()

def replace_end_related(m):
    return m.group(0).replace(
        "}).join('');",
        """}).join('') + `<div style="text-align: center; padding: 15px; color: #9e9e9e; margin: 10px 0; font-size: 14px;">✅ هذه هي جميع النتائج</div>`;"""
    )

# Add end indicator to alternative, similar, related
c = re.sub(
    r"content\.innerHTML = .*?}\)\.join\(''\);",
    replace_end_related,
    c,
    flags=re.DOTALL
)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(c)

print('End indicators added to related lists.')
