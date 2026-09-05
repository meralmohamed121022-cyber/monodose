import sys
import re

def main():
    try:
        with open('index.html', 'r', encoding='utf-8') as f:
            content = f.read()
    except Exception as e:
        print("Failed to read index.html")
        sys.exit(1)

    # 1. Remove the old injected script
    # The old script started with <script>\n        // Remove topical drugs
    start_pattern = '<script>\n        // Remove topical drugs'
    start_idx = content.find(start_pattern)
    if start_idx != -1:
        end_idx = content.find('</script>', start_idx)
        if end_idx != -1:
            content = content[:start_idx] + content[end_idx + 9:]
    
    # 2. Inject the new robust script
    target = '<script src="drugDatabase.js"></script>'
    if target not in content:
        print("Could not find script tag for drugDatabase.js")
        sys.exit(1)

    filter_script = """
    <script>
        // Remove topical drugs from the database so they don't appear in UI
        if (window.drugDatabase) {
            try {
                const excludeKeywords = ['cream', 'oint', 'ointment', 'gel', 'lotion', 'مرهم', 'كريم', 'جل', 'shampoo', 'mouth wash', 'mouthwash', 'wash', 'شامبو', 'غسول'];
                let removedCount = 0;
                for (const key in window.drugDatabase) {
                    const item = window.drugDatabase[key];
                    if (!item) continue;
                    
                    const text = (
                        (item.name || '') + " " + 
                        (item.tradeName || '') + " " + 
                        (item.tradeNameAr || '') + " " + 
                        (item.formulation || '') + " " + 
                        (item.composition || '')
                    ).toLowerCase();
                    
                    const isTopical = excludeKeywords.some(kw => text.includes(kw));
                    if (isTopical) {
                        delete window.drugDatabase[key];
                        removedCount++;
                    }
                }
                console.log(`🧹 Removed ${removedCount} topical/wash drugs from UI.`);
            } catch (e) {
                console.error("Error filtering topical drugs:", e);
            }
        }
    </script>"""

    content = content.replace(target, target + filter_script)
    
    # 3. Remove the Topical button
    button_target = """<button class="filter-btn" onclick="filterByFormulation('topical')">Topical </button>"""
    if button_target in content:
        content = content.replace(button_target, "")
    
    # 4. Cache bust drugDatabase.js to force browser to reload it in case index.html was cached
    # Actually wait, if index.html is cached, cache busting here won't help because index.html itself won't reload.
    # But doing this ensures that if index.html IS reloaded, it fetches a fresh drugDatabase.js.
    # Let's not cache bust because it might cause the user to download 30MB again, but it's local file anyway? No, it's a web app.
    
    with open('index.html', 'w', encoding='utf-8') as f:
        f.write(content)
        
    print("Successfully injected new topical filter and removed Topical button!")

if __name__ == "__main__":
    main()
