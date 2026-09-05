lines = open('index.html', encoding='utf-8').readlines()
for i, line in enumerate(lines):
    if 'id=' in line and 'search' in line.lower() and '<input' in line:
        print(line.strip())
