// Closure

function createCounter(){
    let count=0;
    return function(){
        return count++;
    };
}

const count = createCounter();
// console.log(count());
// console.log(count());
// console.log(count());
// console.log(count());

// this keyword
const Person ={
    name: "Alice",
    greet(greetings) {
        console.log(`${greetings}, My name is ${this.name}`)
    },
};

// Person.greet();
// const greetFn = Person.greet;
// greetFn()


// call, bind & apply
const AnotherPerson ={
    name: "Bob",
};

//Invokes a function immediately and sets the value for this
Person.greet.call(AnotherPerson,"Hello");
Person.greet.apply(AnotherPerson,["Hi"]);

const boundGreet = Person.greet.bind(AnotherPerson, "Hey");
console.log(boundGreet);
boundGreet();