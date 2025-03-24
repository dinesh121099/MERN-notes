//for(; ;) // the condition is defaultly true i,e: ( ;true ; )
{
    console.log("infinite loop");
}
//while() // the condition is defaultly 
    {
    console.log("infinite loop2");
}

const obj={
    fname: "din",
    lname: "esh",
    age: 10
}
//for(let key of obj) throws an error(for of) //obj is not iterable
{
    //console.log("For of loop",key);
}
//for(let key in obj) //for objects we use "for in"
{
    //console.log("For in loop",obj[key]);
}
let arr=[1,2,3,4]
//for(let key of arr)
{
    //console.log("For in loop",key); //For in loop 1 For in loop 2 For in loop 3 For in loop 4
}
// foreach-------------
