let greet = () => {
    console.log('hello, world');
}

// greet = 'hello'; //cannot be changed to string

let fun : Function; //explicitly defined 

fun = () => {
    console.log('hello');
}

// -------------------- //
const add = (a : number, b : number, c?: number | string) => {
    console.log(a + b);
    console.log(c); //if c is not passed, it is undefined as  c is optional parameter
}

add(1,2);

// --------------- //
const add2 = (a : number, b : number, c: number | string = 10) => {
    console.log(a + b);
    console.log(c); //if c is not passed, it will have value 10
}

// ----------------- //

const minus = (a:number, b:number) => {
    return a-b;
}

let result = minus(10,7); //type of the variable result will be decided by the value returned by the function.

//As 'result' is a number (as number is returned by 'minus'), it cannot be changed to string or boolean. 

// ------------------ //
const minus2 = (a:number, b:number) : number => {  //we can explicitly define return type of the function. 
    return a-b;
}