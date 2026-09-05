import sys
import re

sys.stdout.reconfigure(encoding='utf-8')
with open('index.html', encoding='utf-8') as f:
    c = f.read()

# Fix 1: window.displaySearchResults
c = c.replace(
    'currentDisplayCount = 30; // 30 is enough for first view\n    if (typeof lightningRender === \'function\') {\n        window.lightningRender(drugs.slice(0, currentDisplayCount));\n    }',
    'currentDisplayCount = 100;\n    if (typeof lightningRender === \'function\') {\n        window.lightningRender(drugs);\n    }'
)

# Fix 2: Remove window.lightningRender override
block_to_remove = """// Override lightningRender to cap at 30 to make it extremely fast
if (typeof window.originalLightningRender === 'undefined') {
    window.originalLightningRender = window.lightningRender || function(){};
    window.lightningRender = function(drugs) {
        // Only render max 30 at a time to prevent UI freezing
        const subset = drugs ? drugs.slice(0, 100) : [];
        return window.originalLightningRender(subset);
    };
}"""

c = c.replace(block_to_remove, "// (Removed lightningRender override to fix pagination)")

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(c)

print('Pagination blocks removed!')
