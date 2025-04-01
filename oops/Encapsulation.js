class Employee{

    setEmpDetails(name,id,phoneNo){
        this.name=name
        this.id=id
        this.phoneNo=phoneNo
    }

    getEmpName(){
        return this.name
    }
    getEmpID(){
        return this.id
    }
    getphoneNo(){
        return this.getphoneNo
    } 
}
let emp1= new Employee()
emp1.setEmpDetails('aditya',1001,9552123881)
console.log(emp1.getEmpName())
console.log(emp1.getEmpID())
console.log("Hi how are you")
console.log(emp1.getphoneNo())
