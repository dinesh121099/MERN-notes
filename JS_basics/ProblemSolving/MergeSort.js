function mergeSort(arr){
    if(arr.length <= 1) return arr; 

    let mid = Math.floor(arr.length/2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid, arr.length));

    return merge(left, right);
}
function merge(left, right){
    let sortedArr = [];
    while(left.length && right.length){
        if(left[0] >= right[0]){
            sortedArr.push(right.shift());
        }
        else{
            sortedArr.push(left.shift());
        }
    }
    return [...sortedArr, ...left, ...right];

}

let arr = [-8, -3, 5, 1, 7, 6, 2, 4];
console.log("Sorted array:", mergeSort(arr));