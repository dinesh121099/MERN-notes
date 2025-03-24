// Functional prototypes: used for explicit data binding
// for implicit data binding, use the 'this' keyword

// Call method: functionName.call(thisArg, arg1, arg2, ...)
// to borrow methods from one object to other object
const person = {
    name: "Alice",
    greet: function (age) {
      console.log(`Hello, my name is ${this.name}, aged ${age}`);
    },
  };
  const anotherPerson = { name: "Bob" };
  person.greet(20);
  //anotherPerson.greet(); // Error, greet is not a function of anotherPerson
  person.greet.call(anotherPerson, 25);
  
  
  
  // Apply method: functionName.apply(thisArg, [arg1,arg2,...])
  // The arguments to the method is passed through an array (array of parameters)
  
  const Tesla = {
    modelName: "Tesla Cybertruck",
    fuelType: "Electric",
    colour: "White",
    description: function (...variants) {
      console.log(`Model name: ${this.modelName}, 
        Feuled by: ${this.fuelType}, 
        Coloured: ${this.colour}, 
        Available variants: ${variants[0]}, ${variants[1]}, ${variants[2]}`);
    },
  };
  const Hundai = {
    modelName: "Hundai Verna",
    fuelType: "Diesel",
    colour: "Black",
  };
  
  Tesla.description("Red", "Blue", "Orange", "Black");
  Tesla.description.apply(Hundai, ["Orange", "Black", "Red", "Blue"]);
  // apply automatically spreads the array, so that it can be 
  // collected with individual parameters or rest parameters in the method
  
  
  
  // Bind method: