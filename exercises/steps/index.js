// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

/**
 * If the current row is equal to the number of rows we want, we are done. If the current stair string
 * has a length equal to the number of rows we want, we are done. If the length of the current stair
 * string is less than or equal to the current row number we're working on, we add a '#', otherwise add
 * a space
 * @param n - the number of steps
 * @param [row=0] - the current row we're working on
 * @param [stair] - the current string we're building up
 * @returns The function is being returned.
 */
function steps(n, row = 0, stair = '') {
  if (n === row) {
    return;
  }

  if (stair.length === n) {
    console.log(stair);
    return steps(n, row + 1);
  }

  if (stair.length <= row) {
    stair += '#';
  } else {
    stair += ' ';
  }

  return steps(n, row, stair);
}

module.exports = steps;

// function steps(n) {
//   for (let i = 1; i <= n; i++) {
//     console.log('#'.repeat(i) + ' '.repeat(n - i));
//   }
// }

// function steps(n) {
//   for (let row = 0; row < n; row++) {
//     let stair = '';

//     for (let col = 0; col < n; col++) {
//       if (col <= row) {
//         stair += '#';
//       } else {
//         stair += ' ';
//       }
//     }
//     console.log(stair);
//   }
// }
