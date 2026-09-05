def main():
    try:
        with open('index.html', 'r', encoding='utf-8') as f:
            content = f.read()
    except:
        with open('index.html', 'r', encoding='windows-1256') as f:
            content = f.read()

    # Replace #1a237e with very dark navy #08103b everywhere
    content = content.replace('#1a237e', '#08103b')
    content = content.replace('#1A237E', '#08103b')

    with open('index.html', 'w', encoding='utf-8') as f:
        f.write(content)

    print("Main blue color darkened!")

if __name__ == '__main__':
    main()
