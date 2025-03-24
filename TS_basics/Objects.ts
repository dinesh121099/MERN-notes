//objects
let obj: {id: number, type?: string} = {
    id: 1
}
obj.type = "object1";   // ? - optional property 

// Index signatures - used in place where we dont know the no of properites in an object
type person = {
    [key: string]: string | number; // can add any number of properties with key(here number) and values(here string or number)
    Uid: number;
    name: string;
};

let person1: person ={
    Uid: 1,
    name: "Dinesh",
    place: "Chennai",
    place2: "Bangalore"
}
/*let unknownObj: {[key: number]: string} = {}; 
unknownObj[2] = "one";
unknownObj[1] = "two";
unknownObj[3] = "three";*/

console.log( obj, "\n", person1);