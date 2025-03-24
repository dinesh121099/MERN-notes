/*
Create a constructor function Dog that takes in breed and age as parameters and initializes them.
 Add a method bark() that logs "Woof!".Instantiate two different Dog objects and call their bark() methods.
*/

class Dog{
    constructor(breed,age){
        this.breedName=breed;
        this.dogAge=age;
    }
    bark(){
        console.log("Woof!");
    }
}
const dog1=new Dog('Lab',9);
dog1.bark();
const dog2=new Dog('Dash',8);
dog2.bark();