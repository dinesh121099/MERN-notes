const profile ={ 
    name: "john", 
    age: 30
};

const handler = {
    get: (obj, prop) => {
        console.log(`Getting property ${prop}`);
        return prop in obj? obj[prop]: "Property does not exist";
    },
    set: (obj, prop, value) => {
        if (prop == age && typeof value != "Number") {
            throw new Error("Age must be a number");
        }
        obj[prop] = value;
        console.log(`Setting property ${prop} to ${value}`);
        return true;
    }
};

const proxy = new Proxy(target, handler)
console.log(proxy.name);
proxy.age = 25;
console.log(proxy.age);
proxy.gender = 'Male';

