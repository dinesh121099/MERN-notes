//Functional Constructors
/* 
Without functional constructors, you would have to repeat code for each object.
Functional constructors solved this problem by providing a reusable blueprint for creating a new object.
Functional constructors allow you to dynamically create objects with specific properties at runtime.
A functional constructor is essentially a regular JavaScript function that is invoked with the new keyword. 
When called with new, it creates a new object, sets the prototype, and assigns properties and methods. 
*/

function constructorF(fName, lName, age, place) {
  this.firstName = fName;
  this.lastName = lName;
  this.age = age;
  this.place = place;
  this.info = function () {
    console.log(
      `${this.firstName} ${this.lastName}, ${this.age}, ${this.place}`
    );
  };
}
// Using prototype we can create a method in the prototype object to avoid the
// info() method getting created for each of the object.
// constructorF.prototype.info = function () {....}
// Only an object getting created using constructor function can have a prototype
const person = new constructorF("Alice", "Mcdonald", 24, "England");
const person2 = new constructorF("Bob", "Marley", 34, "Sweden");
person.info();
person2.info();

/* 
When you use new with a constructor function or a class, JavaScript:
* Creates a new empty object: {}
* Sets the prototype of the new object to the constructor’s prototype (Person.prototype).
* Binds this to the new object.
* Returns the object.     */
