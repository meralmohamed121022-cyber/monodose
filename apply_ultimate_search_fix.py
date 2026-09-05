import sys
import re

sys.stdout.reconfigure(encoding='utf-8')
with open('index.html', encoding='utf-8') as f:
    c = f.read()

# Fix 1: empty query branch
c = c.replace(
    'window.lightningRender(filtered.slice(0, 100));',
    'window.currentResults = filtered;\n                window.currentDisplayCount = 100;\n                window.lightningRender(filtered);'
)

# Fix 2: non-empty query branch
c = c.replace(
    'window.lightningRender(results.slice(0, 100));',
    'window.currentResults = results;\n            window.currentDisplayCount = 100;\n            window.lightningRender(results);'
)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(c)

print('Ultimate search repair pagination fixed.')
