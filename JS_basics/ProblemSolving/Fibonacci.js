// function fibonacci(n) {
//     let n1=0, n2=1;
//     let arr=[0];
//     let sum =0;
//     for(let i=1; i<n; i++){
//         sum = n1 + n2;
//         n1 = n2;
//         n2 = sum;
//         arr.push(sum);
//     }
//     console.log(arr);
//     return sum;
// }
function fibonacci(n){
    let fib = [0,1];
    let i=0;
    for(i=2; i<= n; i++){
        fib[i] = fib[i-1] + fib[i-2];
    }
    console.log(fib, i);
    return fib[i-1];
}
console.log(fibonacci(10));