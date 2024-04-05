// Linear search in 2D Array

function ArraySearchIn2D(array, number) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      if (array[i][j] == number) {
        return [i, j]
      }
    }
  }
  return -1
}

console.log(ArraySearchIn2D([
  [3, 4, 5],
  [6, 7, 2, 66, 77, 88],
  [8, 9, 10, 11],
],
  88
))