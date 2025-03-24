//concatination

const arr1 = [1,2,3,4];
const arr2 = new Array(1,2,3,4,5);

const arr3=arr1.concat(arr2);

//Every method

const arr4=[1,2,3,4,5]

const isBigEnough= (ele, index) => {
    return ele<2;
};

const everymethod = arr4.every(isBigEnough);
//console.log(everymethod);

//filter


//For each
/*const foreachmethod = arr4.forEach((ele,index) => {
    console.log(ele,index);
})
*/

//Map

//reverse method
const reversemethod = arr4.reverse();
//console.log(reversemethod);

//currying
const currymultiply=(a) => (b) => a*b;
//console.log(currymultiply(5)(2));

//memoization technique


//indexof method
console.log(arr4.indexOf(2));