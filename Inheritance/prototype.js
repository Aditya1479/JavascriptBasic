let EmpDetails = function(name, age) { 
    this.name = name;
    this.age = age;
}

// ✅ Correct way to add methods to the prototype
EmpDetails.prototype.getName = function() {
    return this.name;
}

EmpDetails.prototype.getAge = function() {
    return this.age;
}

// Creating an instance
let emp1 = new EmpDetails('aditya', 27);
console.log(emp1.getAge());   // 27
console.log(emp1.getName());  // aditya
