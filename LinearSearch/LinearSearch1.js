// Find the index of given number in an array

function findNumberIndex(array, number) {
  if(array.length === 0)
  return false
  for(let i=0; i< array.length; i++) {
    if(array[i] === number) {
      return array.indexOf(array[i])
    }
  }
  return false
}

 console.log(findNumberIndex([2, 4, 5, 66, 3, 44, 64, 22, 666], 22));