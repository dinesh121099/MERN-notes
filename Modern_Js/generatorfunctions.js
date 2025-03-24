// Generator functions

function* infiniteSequence(start = 1) {
    let num = start;
    while(true) {
        //yeild keyword pause the function and 
        //returns  a specfic value
        yield num;
        num++;
    }
}

const generator = infiniteSequence();
// Each time .next() is called on the generator, it resumes
// execution until the next yield
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next()); // throws an object
// Usage -> Lazy evaluation, instaed of generating all valuesat once
// The generator produces values only when requested

// next()
// returns an object with yielded value and puts a statement as true
// if execution is done