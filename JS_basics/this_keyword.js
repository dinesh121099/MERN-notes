//"use strict"

//console.log(this);

// function x(){
//     console.log(this);  // this substitution happens, in non-strict mode
// }                       // thus, this points to window object 
// x();

// const y = () => {console.log(this)};  // Arrow function do not have this binding, 
// y();                                 //it takes the value of its enclosing lexical environment
//                                     // in this case its the window object

// const obj={
//     a:10,
//     print: function (){
//         console.log(this.a);        //Here, 'this' refers to the object itself
//     }
// }
// obj.print();

const obj2={
    a:10,
    print: function (){
        const y = () => {
            console.log(this.a)        //Here, this refers to the object,
        }                             //Because it's lexical environment is the object method
        y();
    }                                //(in arrow function, 'this' takes value of its enclosing lexical environment)
}
obj2.print();