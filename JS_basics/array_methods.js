/*
Behind the scenes, the array is essentially an object (with properties and methods):
{
  0: "a",
  1: "b",
  2: "c",
  length: 3    //length is a property
}
*/

let numArr=[1,2,3,4,5,6,7,8];
let strArr=['abc','def','ghi','jkl','mno'];

// includes method
if(strArr.includes('ghi')){
  console.log(`".includes method" Yesss`);
}
else{
  console.log("noooo");
}

//find method
const result = numArr.find((num, ind) => num > 5 && ind >6);
console.log(`.find method, ${result}`);    // Output: 8 (first number greater than 5 and index greater than 6)
