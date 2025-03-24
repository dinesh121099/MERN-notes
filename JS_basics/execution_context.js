function a(){
    let b=12;
    function c(){
        console.log(b);
        b++;
    }
   return c;
}
let d=1999;
let e=a();
for(let i=1;i<=5;i++)
{
    e();
}