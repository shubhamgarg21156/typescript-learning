// 1. Type basics

const character = "mario";
console.log(character);

const inputs = document.querySelectorAll('input');
console.log(inputs)

inputs.forEach(input => {
    console.log(input);
})

// character = 20; //we cannot change the type later

const circ = (diameter : number) => { //diamater is a number. Note: number is int,float,decimal any kind of number. s
    return diameter * Math.PI;
}

console.log(circ(5)); //now cannot pass string or boolean here



//2. Object and arrays

// ---- Arrays ---------- //

let names = ['luigi' , 'mario', 'yoshi'];
// names.push(20); //cannot push number to string array
// names[0] = 20; ///cant change it to number
//names = 'bijli' //not alllowed to change array type

names = ['lal'] //we can do this but still cannot add any number or boolean
let mixed = ['ken' , 20, 40, true];  //Here our array has each string. number and boolean type value. So we can push or change any type value. 
mixed[0] = 20

// ---------- Objects -------------- //

let ninja = {
    name : 'Sam', //these behave as variables. Once assigned, its type cannot change.  
    belt : 'black',
    age : 20
}

ninja.age = 40 //it is possible
// ninja.age = 'forty' //not possible
//ninja.skills = ['fightinh','skeaing'] //not possible. Cannot add new property

// we can redefine ninja but it should have same keys and same types of keys
ninja = {
    name : 'Name',
    belt : 'yellow', //it cannot be number now
    age : 40
    //no new property can be added. 
}