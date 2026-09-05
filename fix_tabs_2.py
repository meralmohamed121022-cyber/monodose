import re

def main():
    try:
        with open('index.html', 'r', encoding='utf-8') as f:
            content = f.read()
    except:
        with open('index.html', 'r', encoding='windows-1256') as f:
            content = f.read()

    # Replace performSearch(); with the correct event trigger
    content = content.replace('performSearch();', 'document.getElementById("searchInput").dispatchEvent(new Event("input"));')

    with open('index.html', 'w', encoding='utf-8') as f:
        f.write(content)

    print("index.html fixed performSearch reference successfully!")

if __name__ == '__main__':
    main()
