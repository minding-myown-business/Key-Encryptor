import string

alphabet = string.ascii_lowercase
reversed_alphabet = string.ascii_lowercase[::-1]
char_map = {} # map of 1: a, 11: b etc.
reversed_map = {} # map of 1: z, 11: y, x etc.

## build map -not inverted ##

def build_map():
    index = 0
    for digit in range(1, 10):  
        for repeat in range(1, 4):
            if index >= 26:
                break
            code = str(digit) * repeat
            letter = alphabet[index]
            char_map[code] = letter
            index += 1

## build reversed map ##

def build_reversed_map():
    index = 0
    for digit in range(1, 10):  
        for repeat in range(1, 4):
            if index >= 26:
                break
            code = str(digit) * repeat
            letter = reversed_alphabet[index]
            reversed_map[code] = letter
            index += 1

## standard caesar shift ##
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

## reverse caesar shift ##
def apply_reverse_caesar_shift(txt, key):
    result = ""
    for char in txt:
        if char.isalpha(): # if is letter
            mirrored_index = 25 - (ord(char) - ord('a')) ## calculates the mirrored position of letter in alphabet ##
            shifted = (mirrored_index + key) % 26  ## (mirrored alphabet + caesar shift) ##
            result += alphabet[shifted]
        else:
            result += char
    return result

## Build maps before using ##
build_map()
build_reversed_map()



encode_or_decode = input("Encode or Decode? \n 1 - Encode \n 2 - Decode \nEnter Number for option: ")

if encode_or_decode == "1":
    print("bap") ## placeholder for encoding logic ##
else:
    decode_input = input("Enter encoded string (use '.' between letters, '..' for space): ")
    inversed_tf = input("Is the encoded string reversed? (y/n): ")
    caesar_key = int(input("Enter Caesar key: "))

    parts = decode_input.split(".")
    decoded = ""

    for code in parts:
        if code == "":
            decoded += " "
        else:
            if inversed_tf.lower() == "y":
                decoded += reversed_map.get(code, "?")
            else:
                decoded += char_map.get(code, "?")

    if inversed_tf.lower() == "y":
        final_result = apply_reverse_caesar_shift(decoded, caesar_key)
    else:
        final_result = apply_caesar_shift(decoded, caesar_key)
    print(final_result)