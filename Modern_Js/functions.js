//let a=function add(a,b){return a+b;}
//console.log(a(2,3));

//default parameters
//function defaultpara(a,b=10,c=13)
///{return a+b+c;}
//console.log(defaultpara(1,13)); // c takes its default value as 13, rest is passed parameteres


//rest parameterised function
/*
function restpara(...a){
    return a;
}
console.log(restpara(1,2,3,4,5,6,7,8));
*/

//IIFE or anonymous function
/*
(function(a,b)
{console.log(a+b);})(2,3);
*/

//recursive function
/*
function recur(num){
if(num<=0)
return 1; 
return num*recur(num-1);
}
console.log(recur(5));
*/

// functional hoisting

//call back function
/*function parentfunc(sendSMS,sendEMAIL)
{
    sendSMS();
    sendEMAIL();
}
parentfunc(()=>console.log("SMS sending"), ()=>console.log("Email sending"));
*/
