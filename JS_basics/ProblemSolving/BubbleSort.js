let arr = [2,5,7,2,3,1,8,4,9];
for(let i = 0; i< arr.length -1; i++){
    for(let j = 0; j < arr.length-i-1; j++){
        if(arr[j] > arr[j+1]){
            let swap = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = swap;
        }
    }
}
console.log(arr);