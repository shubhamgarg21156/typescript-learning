"use strict";
let greet = () => {
    console.log('hello, world');
};
// greet = 'hello'; //cannot be changed to string
let fun; //explicitly defined 
fun = () => {
    console.log('hello');
};
// -------------------- //
const add = (a, b, c) => {
    console.log(a + b);
    console.log(c); //if c is not passed, it is undefined as  c is optional parameter
};
add(1, 2);
// --------------- //
const add2 = (a, b, c = 10) => {
    console.log(a + b);
    console.log(c); //if c is not passed, it will have value 10
};
// ----------------- //
const minus = (a, b) => {
    return a - b;
};
let result = minus(10, 7); //type of the variable result will be decided by the value returned by the function.
//As 'result' is a number (as number is returned by 'minus'), it cannot be changed to string or boolean. 
// ------------------ //
const minus2 = (a, b) => {
    return a - b;
};
