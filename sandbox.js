// ------ Explicit types ----------- //
var character;
var age;
var isLoggedIn;
//age = 'Luigi'; //not possible
age = 30;
//isLoggedIn = 25; //not possible
isLoggedIn = true;
// ------ arrays Explicit types -------- //
var ninjas = []; //can only be array of strings
// ninjas.push('Tom'); //cannot push unless we initialize the array. 
ninjas.push('peter');
// ------------ union types ------------------ //
var mixed = [];
mixed.push('Hello');
mixed.push(20);
mixed.push(false);
// console.log(mixed);
var uid; //uid can be a string or a number
uid = '123';
uid = 21;
// --------------- objects ------------------ //
var ninjaOne;
ninjaOne = {
    name: '',
    age: 20
};
//our object should have these three fields. We can define a template like this. 
var ninjaTwo;
var ninjaThree = {};
// ninjaThree.day = 'monday'; //cannot add property to an empty array
