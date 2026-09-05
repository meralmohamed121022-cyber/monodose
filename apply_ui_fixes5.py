import sys
import re

sys.stdout.reconfigure(encoding='utf-8')
with open('index.html', encoding='utf-8') as f:
    c = f.read()

# 1. Revert Route and MinAge from drug-badges-row in lightningRender
# I added this in apply_ui_fixes2.py:
# ${drug.route ? `<div style="background: #2196F3; color: white; padding: 2px 8px; border-radius: 12px; font-size: 11px; margin-left: 5px; font-weight: bold; display: flex; align-items: center;">${drug.route}</div>` : ''}
# ${drug.minAge ? `<div style="background: #4CAF50; color: white; padding: 2px 8px; border-radius: 12px; font-size: 11px; margin-left: 5px; font-weight: bold; display: flex; align-items: center;">${drug.minAge}</div>` : ''}
c = re.sub(r'\$\{drug\.route \? `<div style="background: #2196F3;.*?</div>` : \'\'\}\s*', '', c)
c = re.sub(r'\$\{drug\.minAge \? `<div style="background: #4CAF50;.*?</div>` : \'\'\}\s*', '', c)

# 2. Fix lightningRender's maxRender limit so it can actually display more than 200 when Load More is clicked.
# In lightningRender(drugs), drugs might be the full results OR a sliced array.
# The original: const maxRender = Math.min(drugs.length, 200);
# We change it to: const maxRender = drugs.length;
# Wait, if drugs is the full array of 5000, we DO want to clamp it to currentDisplayCount!
c = c.replace(
    'const maxRender = Math.min(drugs.length, 200);',
    'const maxRender = Math.min(drugs.length, currentDisplayCount || 200);'
)

# 3. Fix the "End of results" indicator in lightningRender
# The current code:
# if (drugs.length > maxRender) { ... } else if (drugs.length > 0) { ... }
# I will rewrite the whole if block for moreIndicator
def replace_indicator(m):
    return """if (drugs.length > maxRender) {
                    const moreIndicator = document.createElement('div');
                    moreIndicator.className = 'more-results-indicator';
                    moreIndicator.innerHTML = `
            <div style="text-align: center; padding: 15px; background: #e3f2fd; color: #1976d2; border-radius: 8px; margin: 10px 0; cursor: pointer; font-weight: bold;" onclick="showMoreResults()">
                👇 عرض المزيد (${drugs.length - maxRender} متبقي)
            </div>
        `;
                    drugList.appendChild(moreIndicator);
                } else if (drugs.length > 0) {
                    const endIndicator = document.createElement('div');
                    endIndicator.innerHTML = `
            <div style="text-align: center; padding: 15px; color: #9e9e9e; margin: 10px 0; font-size: 14px;">
                ✅ No more results
            </div>
        `;
                    drugList.appendChild(endIndicator);
                }"""

c = re.sub(
    r"if \(drugs\.length > maxRender\) \{.*?drugList\.appendChild\(endIndicator\);\s*\}",
    replace_indicator,
    c,
    flags=re.DOTALL
)

# 4. For the related drugs, change the end indicator to English
c = c.replace('✅ هذه هي جميع النتائج', '✅ No more results')

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(c)

print('Modifications applied.')
