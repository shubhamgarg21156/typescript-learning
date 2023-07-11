// ------ Explicit types ----------- //

let character : string;
let age : number;
let isLoggedIn : boolean;

//age = 'Luigi'; //not possible
age = 30

//isLoggedIn = 25; //not possible
isLoggedIn = true;

// ------ arrays Explicit types -------- //
let ninjas : string[] = []; //can only be array of strings

// ninjas.push('Tom'); //cannot push unless we initialize the array. 
ninjas.push('peter');



// ------------ union types ------------------ //
let mixed : (string|number|boolean)[] = [];
mixed.push('Hello');
mixed.push(20);
mixed.push(false);
// console.log(mixed);

let uid : string|number; //uid can be a string or a number
uid = '123';
uid = 21;

// --------------- objects ------------------ //
let ninjaOne : object;
ninjaOne = {
    name : '',
    age : 20
}

//our object should have these three fields. We can define a template like this. 
let ninjaTwo : {
    name : string,
    age : number,
    color : string
}


let ninjaThree = {}
// ninjaThree.day = 'monday'; //cannot add property to an empty array
