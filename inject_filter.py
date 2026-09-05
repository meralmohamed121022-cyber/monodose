import sys

def main():
    try:
        with open('index.html', 'r', encoding='utf-8') as f:
            content = f.read()
    except Exception as e:
        # Try different encodings
        try:
            with open('index.html', 'r', encoding='utf-16') as f:
                content = f.read()
        except:
            print("Failed to read index.html")
            sys.exit(1)

    target = '<script src="drugDatabase.js"></script>'
    if target not in content:
        print("Could not find script tag for drugDatabase.js")
        sys.exit(1)

    filter_script = """
    <script>
        // Remove topical drugs from the database so they don't appear in UI
        if (window.drugDatabase) {
            const excludeKeywords = ['cream', 'oint', 'ointment', 'gel', 'lotion', 'مرهم', 'كريم', 'جل'];
            let removedCount = 0;
            for (const key in window.drugDatabase) {
                const item = window.drugDatabase[key];
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
            console.log(`🧹 Removed ${removedCount} topical drugs from UI.`);
        }
    </script>"""

    if "Removed" in content and "topical drugs" in content:
        print("Filter script already injected.")
        sys.exit(0)

    new_content = content.replace(target, target + filter_script)
    
    with open('index.html', 'w', encoding='utf-8') as f:
        f.write(new_content)
        
    print("Successfully injected topical filter into index.html!")

if __name__ == "__main__":
    main()
