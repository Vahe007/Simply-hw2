// the output should be true
const roadRegister1 = [
  [false, true, false, false],
  [false, false, true, false],
  [true, false, false, true],
  [false, false, true, false],
];

// the output should be true
const roadRegister2 = [
  [false, true, false, false, false, false, false],
  [true, false, false, false, false, false, false],
  [false, false, false, true, false, false, false],
  [false, false, true, false, false, false, false],
  [false, false, false, false, false, false, true],
  [false, false, false, false, true, false, false],
  [false, false, false, false, false, true, false],
];

// the output should be false
const roadRegister3 = [
  [false, true, false],
  [false, false, false],
  [true, false, false],
];


function solution(matrix) {
  isAppropriate(matrix);
  for (let i = 0; i < matrix.length; i++) {
    let arr = [];
    let pos;
    for (let j = 0; j < matrix[i].length; j++) {
      pos = i;
      if (matrix[j][i]) {
        arr.push(matrix[j][i]);
      }
    }
    if (!helper(arr, matrix, pos)) {
      return false;
    }
  }
  return true;
}
function helper(arr, grid, pos) {
  let count = 0;
  grid[pos].forEach((item, index) => {
    if (item) {
      count++;
    }
  });
  if (count < arr.length) {
    return false;
  }
  return true;
}
function isAppropriate(roadRegister) {
  if (!Array.isArray(roadRegister)) {
    throw new Error("The given argument should be only 2 dimentional array");
  }

  roadRegister.forEach((row, rowIndex) => {
    row.forEach((col) => {
      if (col !== true && col !== false) {
        throw new Error(
          "The elements of the matrix should be only boolean true or false"
        );
      }
    });
  });
}
// console.log(solution(roadRegister1));
// console.log(solution(roadRegister2));
// console.log(solution(roadRegister3));












//this is the second version of the solution
// I am not sure if it works without any bugs, but the first solution seems to have no bugs

// function solution1(roadRegister) {
//   isAppropriate(roadRegister);
//   for (let i = 0; i < roadRegister.length; i++) {
//     for (let j = 0; j < roadRegister[i].length; j++) {
//       if (roadRegister[i][j]) {
//         if (!helper(roadRegister[j], j, roadRegister, i)) {
//           return false;
//         }
//       }
//     }
//   }
//   return true;
// }

// function helper1(arr, position, matrix, i) {
//   let temp;
//   arr.forEach((item, index) => {
//     if (item) {
//       temp = true;
//       if (index === i) {
//         matrix[position][index] = false;
//         matrix[index][position] = false;
//         return;
//       }
//     }
//   });
//   if (temp) {
//     return true;
//   }
//   return false;
// }



