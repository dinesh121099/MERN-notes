//Assigning functions to a variable

//assigning a named function
function greet() {
    return "Hello!";
}
const sayHello = greet(); // sayHello is a alias of the greet function
// i.e; both greet and sayHello share the same reference
console.log(sayHello);
console.log(greet());

//assigning a function returning a function
function outerFunc(){
    return function innerFunc(){
        return "this is from the inner function";
    }
}
const returnedFunc = outerFunc;
console.log(returnedFunc);