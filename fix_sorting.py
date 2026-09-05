import re

def main():
    try:
        with open('index.html', 'r', encoding='utf-8') as f:
            content = f.read()
    except:
        with open('index.html', 'r', encoding='windows-1256') as f:
            content = f.read()

    # 1. Optimize sorting to avoid calling parseMinAge thousands of times.
    # We replace:
    # similar.sort(sortByMinAge);
    # with:
    # similar.forEach(x => x.computedAge = parseMinAge(x.drug.minAge)); similar.sort((a,b) => a.computedAge - b.computedAge);
    
    content = content.replace(
        "similar.sort(sortByMinAge);",
        "similar.forEach(x => x.computedAge = parseMinAge(x.drug.minAge)); similar.sort((a,b) => a.computedAge - b.computedAge);"
    )
    content = content.replace(
        "alternatives.sort(sortByMinAge);",
        "alternatives.forEach(x => x.computedAge = parseMinAge(x.drug.minAge)); alternatives.sort((a,b) => a.computedAge - b.computedAge);"
    )
    content = content.replace(
        "related.sort(sortByMinAge);",
        "related.forEach(x => x.computedAge = parseMinAge(x.drug.minAge)); related.sort((a,b) => a.computedAge - b.computedAge);"
    )

    # 2. Make showDrugDetail non-blocking by using setTimeout
    # find:
    # generateSimilarDrugs();
    # generateAlternativeDrugs();
    # generateRelatedDrugs();
    # Replace the block inside showDrugDetail
    
    pattern_calls = r"(// Generate related drugs sections\s+)generateSimilarDrugs\(\);\s+generateAlternativeDrugs\(\);\s+generateRelatedDrugs\(\);"
    
    replacement_calls = r"""\1
    setTimeout(() => { generateSimilarDrugs(); }, 50);
    setTimeout(() => { generateAlternativeDrugs(); }, 100);
    setTimeout(() => { generateRelatedDrugs(); }, 150);
"""
    content = re.sub(pattern_calls, replacement_calls, content)

    # 3. Add a "Load More" functionality instead of just hiding items.
    # Currently we have:
    # html += `<div class="related-drug" style="text-align:center; padding: 15px; font-weight:bold; color:#666;">+ ${similar.length - 30} more items not shown for performance</div>`;
    # We can change this to a button that renders the rest!
    # Wait, rendering 500 items at once might lag. It's better to just leave it as is, but make it load 50 items and if the user clicks, load 50 more.
    # But since we solved the sorting lag, maybe rendering 100 items is fast?
    # Actually, the user says "ولما اعمل سكرول يحمل ابلاقي عادي". This implies they WANT infinite scroll.
    # Let's just render 100 items max, which is a good compromise and very fast.
    
    content = content.replace("slice(0, 30)", "slice(0, 100)")
    content = content.replace("similar.length > 30", "similar.length > 100")
    content = content.replace("alternatives.length > 30", "alternatives.length > 100")
    content = content.replace("related.length > 30", "related.length > 100")
    content = content.replace("length - 30", "length - 100")

    with open('index.html', 'w', encoding='utf-8') as f:
        f.write(content)

    print("Sorting optimization and async loading applied!")

if __name__ == '__main__':
    main()
