class Car{
    drive(){
        console.log("Driving");
    }
    brake(){
        console.log("Breaking");
    }
}

const myCar = new Car();
myCar.drive();
myCar.brake();

//Hiding implementation is abstraction