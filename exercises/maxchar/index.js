// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const charMap = {};
  let max = 0;
  let maxChar = '';

  for (const char of str) {
    if (!charMap[char]) {
      charMap[char] = 1;
    } else {
      charMap[char]++;
    }
  }

  for (const char in charMap) {
    if (charMap[char] > max) {
      max = charMap[char];
      maxChar = char;
    }
  }

  return maxChar;
}

module.exports = maxChar;

//! Mi solución
/* function maxChar(str) {
  const chars = {};
  let mostRepeated;

  for (const char of str) {
    chars[char] = chars[char] + 1 || 1;
  }

  const values = Object.values(chars);

  const maxValue = values.sort((a, b) => b - a)[0];

  for (const char of str) {
    if (chars[char] === maxValue) {
      mostRepeated = Object.keys(chars).find((key) => chars[key] === maxValue);
    }
  }

  return mostRepeated;
} */
