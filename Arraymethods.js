let fruits=['apple','bananan','grapes']
console.log(fruits)

//removes last element from array
fruits.pop()
console.log(fruits)

//removes first element from array
fruits.shift()
console.log(fruits)

//adds new elemnt at the last index of an array
fruits.push('cherry')
console.log(fruits)

//adds new array element at the first index of an array
fruits.unshift('Orange')
console.log(fruits)

//Removes element from given index
delete fruits[1]
console.log(fruits)

fruits[1]='watermelon'
console.log(fruits)

//removes the element in given range from an array
fruits.splice(1,2)
console.log(fruits)

//adds the elemnt in given syntax in array
fruits.splice(2,0,'dragon fruit','guava')
console.log(fruits)

//creates new array and copy elements from given range
let citrusfruts=fruits.slice(0,2)
console.log(fruits)
console.log(citrusfruts)


//concatenation of 2 arrays
let oddNumber=[1,3,5]
let evenNumber=[2,4,6]
let primeNumbers=[3,7]
let numbers= oddNumber.concat(evenNumber,primeNumbers)
console.log(numbers)