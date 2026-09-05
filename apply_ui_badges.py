import sys
import re

sys.stdout.reconfigure(encoding='utf-8')
with open('index.html', encoding='utf-8') as f:
    c = f.read()

# In lightningRender, replace:
# <div class="drug-formulation">${(drug.formulation || 'N/A').toUpperCase()}</div>
# with:
# <div class="drug-formulation">${(drug.formulation || 'N/A').toUpperCase()}</div>
# ${createMinAgeBadgeHTML(formatMinAge(drug.minAge))}
# ${createRouteBadgeHTML(extractRoutes(drug))}

c = re.sub(
    r'(<div class="drug-formulation">\$\{\(drug\.formulation \|\| \'N/A\'\)\.toUpperCase\(\)\}</div>)',
    r'\1\n                ${createMinAgeBadgeHTML(formatMinAge(drug.minAge))}\n                ${createRouteBadgeHTML(extractRoutes(drug))}',
    c
)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(c)

print('Badges injected natively into lightningRender.')
