// Currying

function multiply(a) {
    return function (b) {
        return a*b;
    };
}

const double = multiply(2)(5);
console.log(double);