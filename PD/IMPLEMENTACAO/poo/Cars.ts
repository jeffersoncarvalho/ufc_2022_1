class Car {
    name: string;
        
    constructor(name: string) {
        this.name = name;
    }
    
    run(speed:number = 0) {
        console.log("A " + this.name + " is moving at " + speed + " mph!");
    }
}

class Mercedes extends Car {
    
    constructor(name: string) {
        super(name);
    }
    
    run(speed:number = 150) {
        console.log('A Mercedes started')
        super.run(speed);
    }
}

class Honda extends Car {
    
    constructor(name: string) {
        super(name);
    }
    
    run(speed:number = 100) {
        console.log('A Honda started')
        super.run(speed);
    }
}

let mercObj:Mercedes = new Mercedes("Mercedes-Benz GLA");
let hondaObj:Honda = new Honda("Honda City")

mercObj.run();  // A Mercedes started A Mercedes-Benz GLA is moving at 150 mph!
hondaObj.run(100045); // A Honda started A Honda City is moving at 100 mph!