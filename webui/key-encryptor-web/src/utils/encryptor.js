const alphabet = 'abcdefghijklmnopqrstuvwxyz';
const reversedAlphabet = alphabet.split('').reverse().join('');
const charMap = {};
const reversedMap = {};

function buildMap() {
    let index = 0;
    for (let digit = 1; digit <= 9; digit++) {
        for (let repeat = 1; repeat <= 3; repeat++) {
            if (index >= 26) {
                break;
            }
            const code = String(digit).repeat(repeat);
            const letter = alphabet[index];
            charMap[code] = letter;
            index++;
        }
    }
}

function buildReversedMap() {
    let index = 0;
    for (let digit = 1; digit <= 9; digit++) {
        for (let repeat = 1; repeat <= 3; repeat++) {
            if (index >= 26) {
                break;
            }
            const code = String(digit).repeat(repeat);
            const letter = reversedAlphabet[index];
            reversedMap[code] = letter;
            index++;
        }
    }
}

function applyCaesarShift(txt, key) {
    let result = '';
    for (const char of txt) {
        if (/[a-z]/.test(char)) {
            const asciiBase = 'a'.charCodeAt(0);
            const shifted = (char.charCodeAt(0) - asciiBase + key) % 26 + asciiBase;
            result += String.fromCharCode(shifted);
        } else {
            result += char;
        }
    }
    return result;
}

function applyReverseCaesarShift(txt, key) {
    let result = '';
    for (const char of txt) {
        if (/[a-z]/.test(char)) {
            const mirroredIndex = 25 - (char.charCodeAt(0) - 'a'.charCodeAt(0));
            const shifted = (mirroredIndex + key) % 26;
            result += alphabet[shifted];
        } else {
            result += char;
        }
    }
    return result;
}

buildMap();
buildReversedMap();

export { charMap, reversedMap, applyCaesarShift, applyReverseCaesarShift };