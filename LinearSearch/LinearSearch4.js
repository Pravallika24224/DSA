//  search the multiple occurrences of an element in an array

function repInArray(array, number) {
  if(array.length === 0) {
    return 0
  }
  let count = 0
  for(let i = 0; i < array.length; i++ ) {
    if(array[i] === number) {
      count++
    }
  }
  return count
}

console.log(repInArray([ 1, 2, 3, 4, 5, 6, 5, 7, 8, 9, 5], 5))

function repInString(string, alp) {
  console.log(string.length)
  if(string.length === 0) {
    return 0
  }
  let count = 0
  string = string.toUpperCase().split('')
  for(let i = 0; i < string.length; i++) {
    if(string[i] === alp.toUpperCase()) {
      count++
    }
  }
  return count
}

console.log(repInString("Hi this is Pravallika", 'i'))