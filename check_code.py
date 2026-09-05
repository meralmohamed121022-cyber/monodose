import re
with open('index_original_backup.html', encoding='utf-8') as f:
    c = f.read()

out = []
for m in re.finditer(r'<div class="drug-code">(.*?)</div>', c):
    out.append(repr(m.group(1)))

with open('output_check.txt', 'w', encoding='utf-8') as f:
    f.write('\n'.join(out))
