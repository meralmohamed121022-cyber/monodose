def main():
    try:
        with open('index.html', 'r', encoding='utf-8') as f:
            content = f.read()
    except:
        with open('index.html', 'r', encoding='windows-1256') as f:
            content = f.read()

    # Define it globally in window
    content = content.replace('<script id="ultimate-search-repair">', '<script id="ultimate-search-repair">\nwindow.currentFormulation = "all";\n')

    with open('index.html', 'w', encoding='utf-8') as f:
        f.write(content)

    print("index.html fixed global variable successfully!")

if __name__ == '__main__':
    main()
