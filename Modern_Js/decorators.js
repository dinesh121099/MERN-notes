// Decorators
function log(target, key, discriptor){
    const originslMethod = discriptor.value;
    discriptor.value = function(...args){
        console.log(`Calling ${key} with arguments ${args}`)
        return originslMethod.apply(this, args);
    };
    return discriptor;
}

class Example{
    @log
    greet
}
