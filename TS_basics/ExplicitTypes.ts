//Explicit type definition

//primitive types
let integer: number = 2;
let str: string = "Dinesh";
let bool: boolean = true;
/*Rarely used types are bigint and symbol*/

//special types
let variable: any = "Anything"; //'any' is a type that "disables type checking" and effectively allows all types to be used.
let variable2: unknown = "Unknown"; //typescripit prevents unknown variable being used
try{
    let variable3: string = variable2 + " Variable";
    console.log(variable3);
}
catch{
    console.log("Unknown variable cannot be used");
}

let nev: never; //cannot be assigned any value
let undef: undefined = undefined;
let nul: null = null;

//array
let strArr: string[] = ['d','i','n','e','s','h'];
let numArr: number[] = [1,2,3,4,5];
let strArr2: readonly string[] = ["read", "only"];
/*strArr2.push("restricted")*/
let ourtuple: [string, boolean, number] = ["abc", true, 2]; // specfic initialized order should be maintained 


console.log(integer, "\n", str, "\n", strArr, "\n", numArr, "\n", undef,"\n", nul ,"\n");