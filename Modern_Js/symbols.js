// Symbols - 

const sym = Symbol("mySymbol");
const obj = {
    [sym] : "Secret",
};

console.log(obj[sym]);
console.log(Object.keys(obj));