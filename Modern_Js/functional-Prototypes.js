// Constructor function
function Person(name,age){
    this.name = name;
    this.age = age;
};

Person.prototype.greet = function() {
    console.log(`Hello my name is ${this.name}`);
};
const Person1 = new Person("Alice",25);
const Person2 = new Person("Bob", 30);
Person1.greet();
Person2.greet();

const animalmethod = {
    eat: () => {
        console.log(`${name} is eating...`);
    },
    sleep:() => {
        console.log(`${name} is sleeping...`);
    }
} 