//diamond pattern printing
let m=5;
var n=Math.floor(m/2)+1;
for(let i=1;i<=n;i++)
{
    let line=" ";
    for(let j=1; j<=n-i; j++)
    {
        line+=" ";
    }
    for(let k=1; k<=2*i-1; k++)
    {
        line+="*";
    }
    console.log(line);
}
for(let i=1;i<=n-1;i++)
{
    let line2=" ";
    for(let j=1; j<=i; j++)
    {
        line2+=" ";
    }
    for(let k=1; k<=2*(n-i)-1; k++)
    {
        line2+="*";
    }
    console.log(line2);
}