// Polyfills
// Using core-js "npm i core-js"

//import "core-js/es/array/includes";
let arr = [1, 2, 3, 4, , 5, 6, 7, 8];
console.log(arr.includes(4));

// polyfills map
var polymap = function (arr, fn) {
  let newArr = [];
  //return (arr.map((ele, i) => fn(ele, i)));
  for (let i = 0; i < arr.length; i++) {
    newArr.push(fn(arr[i], i));
  }
  return newArr;
};

console.log(polymap([1,2,3,4], (num) => num*2));
console.log([1,2,3,4].map(nums=>nums*2)); //Array map method


//Filter method
var polyfilter = function(arr, fn) {
  let filterArray=[];
  //return arr.filter((ele, i) => fn(ele, i));
  for(let i = 0; i < arr.length; i++){
      if(fn(arr[i], i)){
          filterArray.push(arr[i]);
      }
  }
  return filterArray;
};


// Reduce method
var polyreduce = function(arr, fn, init) {
  if(arr.length == 0){
      return init;
  }
  else{
      //return arr.reduce((acc,cur) => fn(acc,cur), init);
      let acc = fn(init, arr[0]);
      for(let i=1; i < nums.length; i++){
          acc = fn(acc, arr[i]);
      }
      return acc;
  } 
};