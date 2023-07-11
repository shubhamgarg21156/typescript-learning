// --------- Dynamic(any) Types ------------ //

let age : any = 25;
age = true; //can change to boolean

age = {name : 'luigi'} //can change to object

//dynamic array
let mixed : any = [];
mixed.push(5);
mixed.push('KA')
mixed.push(false)

//----- dynamic object -------- // 
let ninja : {
    name : any,
    age : any
};

ninja = {
    name : "JK",
    age : 20
};