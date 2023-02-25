function checkEven(number) { //Initialization: Start Point
  if (number ==1) { //Condition: End Point
  return false
  }
  else if (number ==0) { //Condition: End Point
    return true
  }
  return checkEven(number-2) //Incrament/Decrement (Use this to get to the end point)
}
console.log(checkEven(10))

let array = [1,2,3,4,5,6,7,8,9,10]
function sumUp(array) {
  if (array.length ==0) {
    return 0
  }
  return array.shift() + sumUp(array)
}
console.log(sumUp(array))