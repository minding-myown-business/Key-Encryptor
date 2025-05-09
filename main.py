import string

alphabet = string.ascii_lowercase
decode_map = {}


index = 0
for digit in range(1, 10):
    for repeat in range(1, 4):
        if index >= 26:
            break
        code = str(digit) * repeat
        letter = alphabet[index]
        decode_map[code] = letter
        index += 1
print(decode_map)