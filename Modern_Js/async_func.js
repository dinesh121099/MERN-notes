const add = (a,b) => a+b;

const multiply = (a,b) => {
    setTimeout(() =>{
        console.log(a*b);
    },2000);
};

const division = (a,b) => a/b;

console.log(add(10,10));
multiply(10,10);
console.log(division(30,10));
