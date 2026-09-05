import sys
sys.stdout.reconfigure(encoding='utf-8')
with open('index_original_backup.html', encoding='utf-8') as f:
    c = f.read()
import re
# Find the drugItem.innerHTML string
m = re.search(r'drugItem\.innerHTML = `(.*?)`;', c, re.DOTALL)
if m:
    print(m.group(1))
