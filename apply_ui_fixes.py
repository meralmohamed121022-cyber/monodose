import sys, re

sys.stdout.reconfigure(encoding='utf-8')
try:
    with open('index.html', encoding='utf-8') as f:
        c = f.read()
except:
    with open('index.html', encoding='windows-1256') as f:
        c = f.read()

# Replace flex with block for main cards
c = c.replace('<div style="display: flex; gap: 15px; align-items: flex-start;">', 
'<div style="display: block;">')

c = c.replace('<div style="flex-shrink: 0; width: 60px; height: 60px; background: white; border-radius: 12px; box-shadow: 0 2px 5px rgba(0,0,0,0.1); display: flex; align-items: center; justify-content: center; overflow: hidden; border: 1px solid #eee;">',
'<div style="float: right; margin-left: 15px; margin-bottom: 5px; width: 80px; height: 80px; background: white; border-radius: 12px; box-shadow: 0 2px 5px rgba(0,0,0,0.1); display: flex; align-items: center; justify-content: center; overflow: hidden; border: 1px solid #eee;">')

c = c.replace('<div style="flex: 1; min-width: 0;">', '<div style="display: block;">')

# Replace flex with block for related cards
c = c.replace('<div class="related-drug" onclick="showDrugDetail(\'${item.key}\')" style="display: flex; gap: 12px; align-items: center;">',
'<div class="related-drug" onclick="showDrugDetail(\'${item.key}\')" style="display: block; min-height: 60px;">')

c = c.replace('<div style="flex-shrink: 0; width: 50px; height: 50px; background: white; border-radius: 8px; border: 1px solid #eee; display: flex; align-items: center; justify-content: center; overflow: hidden; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">',
'<div style="float: right; margin-left: 12px; margin-bottom: 5px; width: 60px; height: 60px; background: white; border-radius: 8px; border: 1px solid #eee; display: flex; align-items: center; justify-content: center; overflow: hidden; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">')

# Hide drug code
c = re.sub(r'<div class="drug-code">.*?</div>', '', c)
c = re.sub(r'<div class="drug-code" style="display: none;">.*?</div>', '', c)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(c)

print('Modifications applied.')
