function bSearch(arr, target){
    let left =0;
    let right = arr.length-1;   // Two pointer approach (left and right)
    while(left <= right){
        let mid = Math.floor((left + right)/2);
        if(arr[mid] == target){
            return `Found at index ${mid}`;
        }
        else if(arr[mid] > target){
            right = mid-1;
        }
        else{
            left = mid+1;
        }
    }
    return 'Error: Search element not found in the array';
}
console.log(bSearch([1,2,3,4,5,6,7,8,9,10], 3));
console.log(bSearch([1,2,3,4,5,6,7,8,9,10], 5));
console.log(bSearch([1,2,3,4,5,6,7,8,9,10], 8));
console.log(bSearch([1,2,3,4,5,6,7,8,9,10], 0));


//Time complexity - O(log n)
// Space complexity - O(1)