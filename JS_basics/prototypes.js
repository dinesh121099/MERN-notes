Array.prototype.last = function () { // modifying the prototypes of built-in objects are not adviseable
  let a = this.length;
  if (a >= 1) {
    let end = this[a - 1];
    return end;
  } else {
    return -1;
  }
};

//const arr = [1, 2, 3];
//console.log(arr.last()); // 3


const obj = new Object();
obj.name = "Dinesh";
obj.age = 25;
obj2 = { name: "Anil", age: 26 };

Object.setPrototypeOf(obj, {
  info: function () {
    return `${this.name}, ${this.age}`;
  },
});
console.log(obj.info());
console.log(obj);
console.log(obj2);

/*
 * Prefer using Classes for object-oriented design.
 * Use Object.create or Object.setPrototypeOf when working with prototypes explicitly.
 * Avoid modifying built-in prototypes in production code.
 * Don’t try to use .prototype on regular object literals.
 */
