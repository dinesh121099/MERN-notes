// Funtional programming

const add = (a,b) => {
    return a+b;
};


// const numbers = [1,2,3];
// const newNumbers = [...numbers, 4];
// console.log(numbers);
// console.log(newNumbers);

const res = add(1,2);
console.log(res);

// Type cohersion and type checking

console.log("5" == 5); //implicit type conversion
// JS performs implicit type conversion
console.log("5" === 5);
// === is called as strict equality
// === prevents implicit type conversion