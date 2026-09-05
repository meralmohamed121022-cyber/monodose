import re
with open('index_original_backup.html', encoding='utf-8') as f:
    c = f.read()
m = re.search(r'<div class="drug-code">.*?</div>', c, re.DOTALL)
if m:
    print("ORIGINAL HTML:")
    print(m.group(0))

with open('index.html', encoding='utf-8') as f:
    c = f.read()
m2 = re.search(r'<div class="drug-code">.*?</div>', c, re.DOTALL)
if m2:
    print("CURRENT HTML:")
    print(m2.group(0))
