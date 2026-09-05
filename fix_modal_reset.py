import re

def main():
    try:
        with open('index.html', 'r', encoding='utf-8') as f:
            content = f.read()
    except:
        with open('index.html', 'r', encoding='windows-1256') as f:
            content = f.read()

    # Apply scroll reset and accordion collapse to the LAST definition of showDrugDetail (which is the one that executes)
    # The last showDrugDetail looks like this:
    # function showDrugDetail(drugKey) {
    #     selectedDrug = drugDatabase[drugKey];
    
    # We will just inject it into fillPopupInstantWithCompleteFiltering, which is called by the latest showDrugDetail.
    # Or inject directly into the start of the final showDrugDetail.
    
    pattern = r'(function showDrugDetail\(drugKey\)\s*\{\s*selectedDrug = drugDatabase\[drugKey\];)'
    
    reset_code = r"""\1

    // Reset scroll position to top
    setTimeout(() => {
        const detailContent = document.querySelector('.drug-detail-content');
        if (detailContent) detailContent.scrollTop = 0;
        const drugDetailModal = document.getElementById('drugDetail');
        if (drugDetailModal) drugDetailModal.scrollTop = 0;
        
        // Collapse all accordions
        ['similarDrugs', 'alternativeDrugs', 'relatedDrugs'].forEach(id => {
            const contentDiv = document.getElementById(id + 'Content');
            const iconSpan = document.getElementById(id + 'Icon');
            if (contentDiv) {
                contentDiv.classList.remove('expanded');
                contentDiv.style.maxHeight = null;
            }
            if (iconSpan) {
                iconSpan.textContent = '▶';
            }
        });
    }, 10);
"""

    content = re.sub(pattern, reset_code, content)

    with open('index.html', 'w', encoding='utf-8') as f:
        f.write(content)

    print("Modal reset logic added successfully!")

if __name__ == '__main__':
    main()
