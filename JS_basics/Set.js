let args = [1,2,3,1,3];

//Set constructor syntax
let a = new Set(args);
console.log(a); //only unique values gets added

//add method
a.add(4);
a.add(3); // doesnt get added(only unique values)
console.log(a);

//delete method
a.delete(3);
console.log(a);

//has method
console.log(a.has(2));
console.log(a.has(3));

//clear method
// a.clear();
// console.log(a);

//foreach method
a.forEach(ele => ele*2);

//size property
console.log(a.size);