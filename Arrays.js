let numbers=[1,2,3,4,5]
console.log(numbers)

let fruits= ['apple','banana','mango']
console.log(fruits)

let cars= new Array('bmw','thar','skoda')
console.log(cars)
console.log(cars[1])
cars[1]='swift'
console.log(cars[1])
console.log(cars)
cars.push('mercedes')
console.log(cars)
console.log(cars.length)

let x
for (x in cars){
    console.log(  "for loop using in "  +cars[x])
}

for(x of cars){
    console.log("for loop using of   "+x)
}