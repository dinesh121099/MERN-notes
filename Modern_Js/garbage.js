// Memory management and garbage collection
let largearr = new Array(100000000000).fill("data");
function processData(){
    console.log(largearr.length);
}

processData();
largearr = null; // Allows garbage collector to free up memory