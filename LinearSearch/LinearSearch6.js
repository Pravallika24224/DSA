// Find Min/Max in 2D Array

function findMaxIn2D(array) {
  let maxValue = array[0][0]
  for(let i = 0; i < array.length; i++) {
    for(let j = 0 ; j < array[i].length; j++) {
      if(array[i][j] > maxValue) {
        maxValue = array[i][j]
      }
    }
  }
  return maxValue
}
console.log(findMaxIn2D([
  [3, 4, 5],
  [6, 7, 2, 66, 77, 88],
  [8, 9, 10, 111],
]))

function findMinIn2D(array) {
  let minValue = array[0][0]
  for(let i = 0; i < array.length; i++) {
    for(let j = 0 ; j < array[i].length; j++) {
      if(array[i][j] < minValue) {
        minValue = array[i][j]
      }
    }
  }
  return minValue
}
console.log(findMinIn2D([
  [3, 4, 5],
  [6, 7, 21, 66, 77, 88],
  [8, 9, 10, 111],
]))