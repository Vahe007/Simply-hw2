// the output should be true
const grid1 = [
  [".", ".", ".", "1", "4", ".", ".", "2", "."],
  [".", ".", "6", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", "1", ".", ".", ".", ".", ".", "."],
  [".", "6", "7", ".", ".", ".", ".", ".", "9"],
  [".", ".", ".", ".", ".", ".", "8", "1", "."],
  [".", "3", ".", ".", ".", ".", ".", ".", "6"],
  [".", ".", ".", ".", ".", "7", ".", ".", "."],
  [".", ".", ".", "5", ".", ".", ".", "7", "."],
];

// the output should be false
const grid2 = [
  [".", ".", ".", ".", "2", ".", ".", "9", "."],
  [".", ".", ".", ".", "6", ".", ".", ".", "."],
  ["7", "1", ".", ".", "7", "5", ".", ".", "."],
  [".", "7", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", "8", "3", ".", ".", "."],
  [".", ".", "8", ".", ".", "7", ".", "6", "."],
  [".", ".", ".", ".", ".", "2", ".", ".", "."],
  [".", "1", ".", "2", ".", ".", ".", ".", "."],
  [".", "2", ".", ".", "3", ".", ".", ".", "."],
];

function isAppropriate(matrix) {
  if (!Array.isArray(matrix)) {
    throw new Error("The given argument should be 2 dimentional array");
  }
  matrix.forEach((item) => {
    item.forEach((item1) => {
      if (isNaN(item1) && item1 !== ".") {
        throw new Error(
          "Invalid matrix input. The elements of a matrix should be either dots or numbers"
        );
      }
    });
  });
}
function helper(array, item, set) {
  if (!isNaN(item)) {
    set.add(item);
    const temp = array.find((el) => {
      return el === item;
    });
    if (temp) {
      return true;
    }
    array.push(item);
  }
  return false;
}


function subGrid(grid) {
  for (let k = 0; k < grid.length; k += 3) {
    for (let i = 0; i < grid.length; i = i + 3) {
      const arr = [];
      for (let j = 0; j < 3; j = j + 1) {
        arr.push(...grid[j + k].slice(i, i + 3));
      }
      if (!isUnique(arr)) {
        return false;
      }
    }
  }
  return true;
}

function isUnique(arr) {
  const res = arr.filter((item, index) => {
    if (item !== ".") {
      return index !== arr.indexOf(item);
    }
  })
  if (res.length > 0) {
    return false;
  }
  return true;
}

function solution(grid) {
  isAppropriate(grid);
  const set = new Set();
  for (let i = 0; i < grid.length; i++) {
    const row = [];
    const col = [];
    for (let j = 0; j < grid[i].length; j++) {
      if (
        grid[i][j] > 9 ||
        grid[i][j] < 0 ||
        grid[j][i] > 9 ||
        grid[j][i] < 0
      ) {
        return false;
      }
      if (helper(row, grid[i][j], set) || helper(col, grid[j][i], set)) {
        return false;
      }
    }
  }
  if (!subGrid(grid)) {
    return false;
  }
  if (set.size === 9) {
    return true;
  }
  return false;
}

console.log(solution(grid1));
console.log(solution(grid2));
