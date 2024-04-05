// find the index of an alphabet in a string

function findAlphabetIndex(string, alp) {
  if(string.length = 0) {
    return false
  }
  string = string.toUpperCase().split('')
  for(let i = 0; i< string.length; i++) {
    if(string[i] === alp.toUpperCase()){
      return string.indexOf(string[i])
    }
  }
  return false
}

console.log(findAlphabetIndex("PRAVALLIKA", "v"))