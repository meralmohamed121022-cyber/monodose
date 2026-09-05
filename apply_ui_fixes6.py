import sys
import re

sys.stdout.reconfigure(encoding='utf-8')
with open('index.html', encoding='utf-8') as f:
    c = f.read()

# 1. Fix loadDrugList to pass the full array instead of slice(0, 50)
c = c.replace('window.lightningRender(allDrugsList.slice(0, 50));', 'window.lightningRender(allDrugsList);')

# 2. Fix showMoreResults to pass the full array instead of slice
def replace_show_more(m):
    return """function showMoreResults() {
                const nextBatch = Math.min(currentResults.length, currentDisplayCount + 200);
                currentDisplayCount = nextBatch;
                window.lightningRender(currentResults);
            }"""

c = re.sub(r'function showMoreResults\(\) \{.*?window\.lightningRender\(newDrugs\);\s*\}', replace_show_more, c, flags=re.DOTALL)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(c)

print('Pagination logic fixed.')
