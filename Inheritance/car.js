class Car {
    setName(name) {
        this.name = name; 
    }

    startEngine() {
        console.log(`Engine has been started ${this.name}`);
    }

    stopEngine() {
        console.log(`Engine has been stopped ${this.name}`);
    }
}

class Toyota extends Car {
    topSpeed(speed) {
        console.log(`Top speed for ${this.name} is ${speed}`);
    }
}

let myCar = new Toyota();
myCar.setName('Swift');
myCar.startEngine();
myCar.stopEngine();
myCar.topSpeed(200);
