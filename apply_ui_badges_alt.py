import sys
import re

sys.stdout.reconfigure(encoding='utf-8')
with open('index.html', encoding='utf-8') as f:
    c = f.read()

# Pattern to replace in alternative/similar/related
pattern = r'\$\{item\.drug\.minAge \? `<span style="display: inline-flex; align-items: center; gap: 4px; background: #4caf50; color: white; padding: 3px 8px; border-radius: 12px; font-size: 11px; font-weight: bold;">👶 \$\{item\.drug\.minAge\}</span>` : \'\'\}'
replacement = r'${createMinAgeBadgeHTML(formatMinAge(item.drug.minAge))}\n                    ${createRouteBadgeHTML(extractRoutes(item.drug))}'

c = re.sub(pattern, replacement, c)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(c)

print('Badges injected into alternative/similar/related drugs.')
