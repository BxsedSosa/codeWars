function addLength(str) {
  let newArray = []
  let strArray = str.split(' ');
  let arrayLength = strArray.length;
  for (let i=0;i<arrayLength;i++) {
    newArray.push(`${strArray[i]} ${strArray[i].length}`)
  }
  return newArray
}