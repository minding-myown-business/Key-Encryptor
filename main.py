import string

alphabet = string.ascii_lowercase
map = {}

## build map -not inverted ##
index = 0
for digit in range(1, 10):
    for repeat in range(1, 4):
        if index >= 26:
            break
        code = str(digit) * repeat
        letter = alphabet[index]
        map[code] = letter
        index += 1

decode_input = input("Enter encoded string (use '.' between each number-letter): ")

parts = decode_input.split(".")
for code in parts:
    print(map.get(code, "?"), end="")