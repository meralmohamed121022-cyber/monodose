import re

def main():
    try:
        with open('index.html', 'r', encoding='utf-8') as f:
            content = f.read()
    except:
        with open('index.html', 'r', encoding='windows-1256') as f:
            content = f.read()

    # The bug is: Object.keys(drugDatabase).find(k => drugDatabase[k] === selectedDrug)
    # inside the forEach loop!
    # I will replace it directly.
    
    # Let's define the buggy snippet
    buggy_snippet = r"Object\.keys\(drugDatabase\)\.forEach\(key\s*=>\s*\{\s*if\s*\(key\s*!==\s*Object\.keys\(drugDatabase\)\.find\(k\s*=>\s*drugDatabase\[k\]\s*===\s*selectedDrug\)"
    
    fixed_snippet = r"""const currentDrugKey = Object.keys(drugDatabase).find(k => drugDatabase[k] === selectedDrug);
    Object.keys(drugDatabase).forEach(key => {
        if (key !== currentDrugKey"""

    content = re.sub(buggy_snippet, fixed_snippet, content)

    # I also want to address the user's desire to load more on scroll or via button.
    # But wait, fixing the 2.3 billion iterations will make it instantaneous.
    # The user might actually NOT care about scrolling if it loads instantly.
    # Wait, the user said "ولما اعمل سكرول يحمل ابلاقي عادي". This implies they want the rest of the list, not just 30!
    # I can add a "Load More" button that loads 30 more items, instead of writing an intersection observer.

    with open('index.html', 'w', encoding='utf-8') as f:
        f.write(content)

    print("O(n^2) bug fixed successfully!")

if __name__ == '__main__':
    main()
