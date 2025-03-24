var n=8;
for(let i=1; i<=n; i++)
{
    // var line="";
    // for(let j=1; j<=n; j++)
    // {
    //     if(i==1||i==n||j==1||j==n)
    //     {
    //         line+="*  ";
    //     }
    //     else
    //     {
    //         line+="   ";
    //     }
    // }
    // console.log(line);
    if(i == 1 || i == n){
        console.log("*  ".repeat(n));
    }
    else{
        console.log("* "+ "   ".repeat(n-2)+" *");
    }
}