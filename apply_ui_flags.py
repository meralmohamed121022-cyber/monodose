import sys
import re

sys.stdout.reconfigure(encoding='utf-8')
with open('index.html', encoding='utf-8') as f:
    c = f.read()

# 1. Add getFlagsHTML function
flags_script = """
            function getFlagsHTML(countries) {
                if (!countries || countries.length === 0) return '';
                let html = '<div style="position: absolute; top: 2px; right: 2px; display: flex; flex-direction: column; gap: 2px;">';
                if (countries.includes('sa')) html += '<span title="Saudi Arabia" style="font-size: 14px; line-height: 1; filter: drop-shadow(0 1px 1px rgba(0,0,0,0.2));">🇸🇦</span>';
                if (countries.includes('eg')) html += '<span title="Egypt" style="font-size: 14px; line-height: 1; filter: drop-shadow(0 1px 1px rgba(0,0,0,0.2));">🇪🇬</span>';
                html += '</div>';
                return html;
            }
"""

if 'function getFlagsHTML' not in c:
    # Insert it before function formatRoute
    c = c.replace('function formatRoute(route)', flags_script + '\n            function formatRoute(route)')

# 2. Update lightningRender image container
# From:
# <div style="float: right; margin-left: 15px; margin-bottom: 5px; width: 80px; height: 80px; background: white; border-radius: 12px; box-shadow: 0 2px 5px rgba(0,0,0,0.1); display: flex; align-items: center; justify-content: center; overflow: hidden; border: 1px solid #eee;">
#     <img src="${drug.image_url || ...}" onerror="..." style="...">
# </div>
# To:
# <div style="float: right; margin-left: 15px; margin-bottom: 5px; width: 80px; height: 80px; background: white; border-radius: 12px; box-shadow: 0 2px 5px rgba(0,0,0,0.1); display: flex; align-items: center; justify-content: center; overflow: hidden; border: 1px solid #eee; position: relative;">
#     <img src="${drug.image_url || ...}" onerror="..." style="...">
#     ${getFlagsHTML(drug.countries)}
# </div>
c = re.sub(
    r'(<div style="float: right; margin-left: 15px; margin-bottom: 5px; width: 80px; height: 80px; background: white; border-radius: 12px; box-shadow: 0 2px 5px rgba\(0,0,0,0\.1\); display: flex; align-items: center; justify-content: center; overflow: hidden; border: 1px solid #eee;)(.*?>\s*<img .*?>\s*)(</div>)',
    r'\1 position: relative;\2    ${getFlagsHTML(drug.countries)}\n\3',
    c
)

# 3. Update related drugs image container (Alternative, Similar, Related)
# From:
# <div style="float: right; margin-left: 12px; margin-bottom: 5px; width: 60px; height: 60px; background: white; border-radius: 8px; border: 1px solid #eee; display: flex; align-items: center; justify-content: center; overflow: hidden; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
#     <img src="..." onerror="..." style="...">
# </div>
# To:
# <div style="float: right; margin-left: 12px; margin-bottom: 5px; width: 60px; height: 60px; background: white; border-radius: 8px; border: 1px solid #eee; display: flex; align-items: center; justify-content: center; overflow: hidden; box-shadow: 0 1px 3px rgba(0,0,0,0.05); position: relative;">
#     <img src="..." onerror="..." style="...">
#     ${getFlagsHTML(item.drug.countries)}
# </div>
c = re.sub(
    r'(<div style="float: right; margin-left: 12px; margin-bottom: 5px; width: 60px; height: 60px; background: white; border-radius: 8px; border: 1px solid #eee; display: flex; align-items: center; justify-content: center; overflow: hidden; box-shadow: 0 1px 3px rgba\(0,0,0,0\.05\);)(.*?>\s*<img .*?>\s*)(</div>)',
    r'\1 position: relative;\2    ${getFlagsHTML(item.drug.countries)}\n\3',
    c
)

# 4. Update fillPopupDetails image container
# From:
# <div style="width: 120px; height: 120px; background: white; border-radius: 16px; box-shadow: 0 4px 10px rgba(0,0,0,0.1); display: flex; align-items: center; justify-content: center; overflow: hidden; border: 2px solid #eee;">
#     <img src="..." onerror="..." style="...">
# </div>
# To: (Add position relative and getFlagsHTML(drug.countries))
c = re.sub(
    r'(<div style="width: 120px; height: 120px; background: white; border-radius: 16px; box-shadow: 0 4px 10px rgba\(0,0,0,0\.1\); display: flex; align-items: center; justify-content: center; overflow: hidden; border: 2px solid #eee;)(.*?>\s*<img .*?>\s*)(</div>)',
    r'\1 position: relative;\2    ${getFlagsHTML(drug.countries)}\n\3',
    c
)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(c)

print('Flags added to UI.')
