def main():
    try:
        with open('index.html', 'r', encoding='utf-8') as f:
            content = f.read()
    except:
        with open('index.html', 'r', encoding='windows-1256') as f:
            content = f.read()

    # 1. Change the purple/blue gradients to dark blue
    content = content.replace('#667eea', '#0d47a1')
    content = content.replace('#764ba2', '#1a237e')
    content = content.replace('#5a67d8', '#002171') # Hover color for scrollbar

    # 2. Add mobile fixes for dose box and dose values to prevent stretching
    mobile_fixes = """
/* Mobile dose box fixes */
@media (max-width: 768px) {
    .dose-box {
        padding: 12px !important;
    }
    .main-dose-value {
        padding: 10px !important;
        font-size: 16px !important;
        margin: 10px 0 !important;
    }
    .drug-detail-content {
        flex-direction: column !important;
    }
    .left-column-info {
        width: 100% !important;
    }
}
"""
    # Insert it right before the first </style> or at the end of the main styles
    # We'll just replace the first </style> we find after the main style block
    last_style_idx = content.rfind('</style>')
    if last_style_idx != -1:
        content = content[:last_style_idx] + mobile_fixes + content[last_style_idx:]

    with open('index.html', 'w', encoding='utf-8') as f:
        f.write(content)

    print("index.html UI colors and mobile fixes applied successfully!")

if __name__ == '__main__':
    main()
