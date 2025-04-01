let x= 10, y =20 
console.log(x==y)

//== comparison operator not checking the its type
let a=10, b='10'
console.log(a==b)
console.log(a!=b)

//=== comparison operator will check value as well as type of variable
let m=10,n='10'
console.log(m===n)
console.log(m!==n)

//> greater than,  < less than , >= greater than equal to, < less than equal to

let w=10,e=20
console.log(w<e)
console.log(w>e)



///Ternary operator 
let output = w>e ? "w is greater": "e is greater"
console.log(output)