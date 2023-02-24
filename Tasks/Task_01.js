function addNumbers(...args){
    let result = 0;
    for (let arg of args) result += arg;
    return result;
}

function printArguments(...args){
    args.forEach(arg => console.log(arg))
}

function sumOfAnyArgs(...args){
    let result = "";
    args.forEach((arg) => result += arg);
    return console.log(result);
}

function sumOfNumberArgs(...args){
    let result = 0;
    const numbers = args.filter((arg) => typeof arg==="number");
    numbers.forEach((number) => result += number);
    return console.log(result);
}

console.log(addNumbers(1,2,3,4,5));
console.log("-------------------");
printArguments(42,'atez', true, {name: 'Deniz', surname: 'Can'}, [1,2,3]);
printArguments(1,2,3,4,5);
console.log("-------------------");
sumOfAnyArgs(42,'atez', true, {name: 'Deniz', surname: 'Can'}, [1,2,3]);
sumOfAnyArgs(1,2,3,4,5);
console.log("-------------------");
sumOfNumberArgs(42,'atez',500,true,50,{name: 'Deniz', surname: 'Can'},-100,[1,2,3],0);
sumOfNumberArgs(1,2,3,4,5);
