// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

/**
 * We compare the cleaned strings of stringA and stringB to see if they are equal
 * @param stringA - "rail safety"
 * @param stringB - "cinema"
 * @returns A boolean value.
 */
function anagrams(stringA, stringB) {
  return cleanStr(stringA) === cleanStr(stringB);
}

/**
 * It takes a string, removes all non-alphanumeric characters, converts it to lowercase, splits it into
 * an array, sorts the array, and joins it back into a string
 * @param {string} string - the string to be cleaned
 * @returns A string with all non-alphanumeric characters removed, converted to lowercase, sorted
 * alphabetically, and joined together.
 */
function cleanStr(string) {
  return string
    .replace(/[^\w]/g)
    .toLowerCase()
    .split('')
    .sort()
    .join('');
}

module.exports = anagrams;

// function anagrams(stringA, stringB) {
  // const charsA = {};
  // const charsB = {};

  // const stringAR = stringA.replace(/[^\w]/g, '');
  // const stringBR = stringB.replace(/[^\w]/g, '');

  // for (const char of stringAR) {
  //   charsA[char] = charsA[char] + 1 || 1;
  // }

  // for (const char of stringBR) {
  //   charsB[char] = charsB[char] + 1 || 1;
  // }

  // return Object.values(charsA)
  //   .sort()
  //   .every((v, i) => v === Object.values(charsB).sort()[i]);
// }
