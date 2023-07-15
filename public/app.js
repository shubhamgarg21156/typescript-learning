"use strict";
// const anchor = document.querySelector('a')!;
//  //! sign indicates that the field anchor will not be null.
// console.log(anchor.href);  //Compiler knows that anchor is of type anchor tag. 
// const form = document.querySelector('form'); //Compiler knows that form is of type form tag. 
const form = document.querySelector('.new-item-form'); //Here we are tycasting the element as form element as we have passed the class and compiler doesnt know the type.
// console.log(form.children);
//inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
