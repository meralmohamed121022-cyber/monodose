def main():
    try:
        with open('index.html', 'r', encoding='utf-8') as f:
            content = f.read()
    except:
        with open('index.html', 'r', encoding='windows-1256') as f:
            content = f.read()

    # Create CSS fixes
    fixes = """
/* CUSTOMIZED EXPANDABLE SECTIONS & DOSE FONT SIZE */
@media (max-width: 768px) {
    .main-dose-value { font-size: 14px !important; }
}

.expandable-section {
    margin-bottom: 15px !important;
}

/* Similar Drugs - Blue */
.expandable-section:has(#similarDrugsContent) .expandable-header {
    background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%) !important;
}
.expandable-section:has(#similarDrugsContent) .expandable-content {
    background: linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%) !important;
    border-left: 5px solid #3b82f6 !important;
}

/* Alternative Drugs - Orange */
.expandable-section:has(#alternativeDrugsContent) .expandable-header {
    background: linear-gradient(135deg, #f59e0b 0%, #b45309 100%) !important;
}
.expandable-section:has(#alternativeDrugsContent) .expandable-content {
    background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%) !important;
    border-left: 5px solid #f59e0b !important;
}

/* Related Drugs - Purple */
.expandable-section:has(#relatedDrugsContent) .expandable-header {
    background: linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%) !important;
}
.expandable-section:has(#relatedDrugsContent) .expandable-content {
    background: linear-gradient(135deg, #ede9fe 0%, #ddd6fe 100%) !important;
    border-left: 5px solid #8b5cf6 !important;
}

/* Fast Transition */
.expandable-content {
    transition: max-height 0.1s ease-out, padding 0.1s ease-out !important;
}
.expandable-content.expanded {
    max-height: 800px !important;
}
"""
    
    # Inject before last </style>
    last_style_idx = content.rfind('</style>')
    if last_style_idx != -1:
        content = content[:last_style_idx] + fixes + content[last_style_idx:]

    with open('index.html', 'w', encoding='utf-8') as f:
        f.write(content)

    print("Customizations applied successfully!")

if __name__ == '__main__':
    main()
