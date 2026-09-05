import re
import sys

def main():
    try:
        with open('index.html', 'r', encoding='utf-8') as f:
            content = f.read()
    except:
        with open('index.html', 'r', encoding='windows-1256') as f:
            content = f.read()

    # 1. Add global variable currentFormulation if not present
    if 'let currentFormulation =' not in content:
        # find where to inject it. Right before function performSearch is a good place
        content = content.replace('function performSearch() {', 'let currentFormulation = "all";\n        function performSearch() {')

    # 2. Modify performSearch() to use currentFormulation
    empty_query_block = """if (query.length === 0) {
                window.lightningRender(allDrugs.slice(0, 30));
                return;
            }"""
    
    new_empty_query = """if (query.length === 0) {
                const filtered = currentFormulation === 'all' 
                    ? allDrugs 
                    : allDrugs.filter(d => d.formulation === currentFormulation);
                window.lightningRender(filtered.slice(0, 30));
                return;
            }"""
    
    content = content.replace(empty_query_block, new_empty_query)

    main_loop_cond = """if (tradeName.includes(query) || genericName.includes(query) || composition.includes(query) || code === query || code.includes(query) || isBarcodeMatch) {
                    results.push(drug);
                }"""
                
    new_main_loop = """if (tradeName.includes(query) || genericName.includes(query) || composition.includes(query) || code === query || code.includes(query) || isBarcodeMatch) {
                    if (currentFormulation === 'all' || drug.formulation === currentFormulation) {
                        results.push(drug);
                    }
                }"""
                
    content = content.replace(main_loop_cond, new_main_loop)

    # 4. Modify filterByFormulation to just set the state and call performSearch
    pattern = re.compile(r'function filterByFormulation\(formulation\) \{.*?(?=function\s+\w+\()', re.DOTALL)
    
    new_func = """function filterByFormulation(formulation) {
            // Update active button
            document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
            event.target.classList.add('active');

            // Save state and trigger search
            currentFormulation = formulation;
            performSearch();
        }

        """
        
    content = pattern.sub(new_func, content)

    with open('index.html', 'w', encoding='utf-8') as f:
        f.write(content)

    print("index.html patched successfully!")

if __name__ == '__main__':
    main()
