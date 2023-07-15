let fun = Function;

//example 1
let greet : ( a : string, b : string) => void; //Function signature

greet = (name:string, msg :string) => {
    console.log(`${name} says ${msg}`);
}

//example 2
let calc : (a : number, b : number, c : string) => number;

calc = (numOne : number, numTwo : number, action : string) => {
    if(action === 'add'){
        return numOne + numTwo;
    }else{
        return numOne - numTwo;
    }
}

//example 3
let log : (obj : {name : string, age : number}) => void;
log = (obj : {name : string , age : number}) => {
    console.log(`${obj.name} , ${obj.age}`);
}

//we can also use type aliases
type person = {name : string , age : number};

log = (obj : person) => {
    console.log(`${obj.name} , ${obj.age}`);
}






