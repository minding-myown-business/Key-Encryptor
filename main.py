import string

alphabet = string.ascii_lowercase
map = {} # map of 1: a, 11: b etc.

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

def apply_caesar_shift(txt, key):
    result = ""
    for char in txt:
        if char.isalpha(): # if is letter
            ascii_base = ord("a")
            shifted = (ord(char) - ascii_base + key) % 26 + ascii_base # (chr.unicode - start_of_alphabet.unicode + key) "% 26" means find the shifted letter position in alphabet
            result += chr(shifted) # result = result + (shifted character unicode pos. => actual character)
        else:
            result += char
    return result

decode_input = input("Enter encoded string (use '.' between each number-letter): ")
caesar_key = int(input("Give the key, please: "))

parts = decode_input.split(".")
decoded = ""
for code in parts:
    decoded += map.get(code, code)
final_result = apply_caesar_shift(decoded, caesar_key)
print(final_result)
# for code in parts:
#     print(map.get(code, "?"), end="")
