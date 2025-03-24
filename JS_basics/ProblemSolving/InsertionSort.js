let arr = [5,2,7,2,3,1,8,4,9];
for(let i =0; i< arr.length; i++){
    
}
//Bubble sort
for(let i =0; i< arr.length; i++){
    for(let j = i+1; j< arr.length; j++){
        if(arr[i] > arr[j]){
            let swap = arr[i];
            arr[i] = arr[j];
            arr[j] = swap;
        }
    }
}
console.log(arr);