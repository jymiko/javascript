// //var, let, const

// //VAR
// var name = 'Jatmiko';
// console.log(name);
// name = 'Mustafidatun Nashihah';
// console.log(name);

// //Init var
// var greeting;
// console.log(greeting);
// greeting = 'Hello, Good Evening';
// console.log(greeting);

// //letters, numbers, _, $
// //cannot start with number 

// //multiwords vars
// var firstName = 'John'; //Camel case (For regular variabel)
// var first_name = 'Sara'; //Underscore
// var FirstName = 'Tom'; //Pascal case (Recomended in OOP)
// var firstname;

// //LET
// //different between let and var is , when you initialize new variabel without data . let won't show as undifiend data.
// let name;
// name = 'Jatmiko';
// console.log(name);
// name = 'Mustafidatun Nashihah';
// console.log(name);

//CONST
// const name='Jatmiko';
// console.log(name);
//const cannot reassign 
// name = 'Mustafidatun Nashihah';
//const have to assign a value
// const greeting;

const person = {
    name : 'Jatmiko',
    age : 25
}

// to change object of value we use value.objectname
// example
person.name='Mustafidatun Nashihah';
console.log(person);

//array
const number=[1,2,3,4,5];
// to add new value of the object we use value.push
number.push(6);
console.log(number);