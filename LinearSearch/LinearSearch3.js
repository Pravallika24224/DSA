// Return min/max value in an array

function findMax(array) {
  if(array.length === 0) {
    return false
  }
  let maxNum = array[0]
  for(let i = 0; i< array.length; i++) {
    if(array[i] > maxNum) {
      maxNum = array[i]
    }
  }
  return maxNum
}

console.log(findMax([3, 5, -6, 8, 1, -53, -76, 2]))

function findMin(array) {
  if(array.length === 0) {
    return false
  }
  let minNum = array[0]
  for(let i = 0; i< array.length; i++) {
    if(array[i] < minNum) {
      minNum = array[i]
    }
  }
  return minNum
}

console.log(findMin([3, 5, -6, 8, 1, -53, -76, 2]))