def main():
    try:
        with open('index.html', 'r', encoding='utf-8') as f:
            content = f.read()
    except:
        with open('index.html', 'r', encoding='windows-1256') as f:
            content = f.read()

    # Append our universal padding fixes right before the last </style>
    fixes = """
/* UNIVERSAL DOSE BOX FIXES TO PREVENT STRETCHING */
.dose-content { padding: 12px !important; }
.condition-header { padding: 12px 15px !important; font-size: 15px !important; }
.dose-box { padding: 10px !important; }
.main-dose-value { padding: 8px !important; font-size: 16px !important; margin: 8px 0 !important; display: block !important; width: 100% !important; box-sizing: border-box !important; }
.dose-indication { margin-bottom: 15px !important; display: block !important; width: 100% !important; box-sizing: border-box !important; }
.bottom-full-width { padding: 10px !important; display: block !important; width: 100% !important; box-sizing: border-box !important; }
.dose-section { width: 100% !important; display: block !important; box-sizing: border-box !important; }
"""
    last_style_idx = content.rfind('</style>')
    if last_style_idx != -1:
        content = content[:last_style_idx] + fixes + content[last_style_idx:]

    with open('index.html', 'w', encoding='utf-8') as f:
        f.write(content)

    print("Universal Dose Box padding fixes applied!")

if __name__ == '__main__':
    main()
