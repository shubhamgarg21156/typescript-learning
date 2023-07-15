// const anchor = document.querySelector('a')!;
//  //! sign indicates that the field anchor will not be null.
// console.log(anchor.href);  //Compiler knows that anchor is of type anchor tag. 

// const form = document.querySelector('form'); //Compiler knows that form is of type form tag. 

const form = document.querySelector('.new-item-form') as HTMLFormElement; //Here we are tycasting the element as form element as we have passed the class and compiler doesnt know the type.

// console.log(form.children);

//inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details= document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e : Event) => {
    e.preventDefault();

    console.log(
        type.value,
        tofrom.value,
        details.value,
        amount.valueAsNumber
    )
})
