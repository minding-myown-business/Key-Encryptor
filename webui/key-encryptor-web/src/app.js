// This file contains the main JavaScript logic for the key encryptor web application.

import {
  charMap,
  reversedMap,
  applyCaesarShift,
  applyReverseCaesarShift,
} from "./utils/encryptor.js";

document.addEventListener("DOMContentLoaded", () => {
  const processButton = document.getElementById("processButton");
  const inputField = document.getElementById("inputText");
  const caesarKeyField = document.getElementById("caesarKey");
  const encodeOrDecodeSelect = document.getElementById("encodeOrDecode");
  const resultDiv = document.getElementById("result");

  processButton.addEventListener("click", () => {
    const inputText = inputField.value;
    const caesarKey = parseInt(caesarKeyField.value) || 0;
    const mode = encodeOrDecodeSelect.value;

    let output = "";
    if (mode === "encode") {
      output = encode(inputText, caesarKey);
    } else {
      output = decode(inputText, caesarKey);
    }
    resultDiv.textContent = output;
  });
});

// Dummy encode function for demonstration
function encode(text, key) {
  // Replace with your actual encoding logic
  return `Encoded: ${text} (key: ${key})`;
}

function decode(text, key) {
  // Decoding logic: expects input in the format '1.11.2' (with '.' between codes, '..' for space)
  // Ask user if reversed (for now, assume not reversed, or add UI for it if needed)
  // For demo, assume not reversed and not using reversedMap
  // If you want to support reversed, add a checkbox and use reversedMap/applyReverseCaesarShift
  const reversed = false; // TODO: get from UI if needed
  const parts = text.split(".");
  let decoded = "";
  for (const code of parts) {
    if (code === "") {
      decoded += " ";
    } else {
      decoded += charMap[code] || code;
    }
  }
  // Apply caesar shift after decoding
  return applyCaesarShift(decoded, key);
}
