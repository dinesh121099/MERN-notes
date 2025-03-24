const obj={
    fName: "Dinesh",
    mName: "N",
    lName: "P",
    age: 25,
    sex: 'M'
};

Object.seal(obj); // object properties can be modified but not added
obj.age=26;  //age gets updated
console.log(obj); //age =26, modified property

Object.freeze(obj); //object properties cannot be added or modified
obj.age=25; // age doesnot get updated
console.log(obj); //age =26 still

console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));


const obj={
    key1: "abc",
    key2: "def",
    key3: "ghi"
};

if('key1' in Object.keys(obj)){   //Object.keys(obj) returns an array of all keys in obj
    console.log("key is in obj");
}
else{
    console.log("Key not present in obj");
}
