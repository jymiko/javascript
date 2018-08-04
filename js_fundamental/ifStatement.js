// if(something){
//     do something
// }else{
//     do something else
// }

const id = 100;

// //Equal to 
// if(id == 101){
//     console.log('correct');
// }else{
//     console.log('incorrect');
// }

// //Not equal to 
// if(id != 101){
//     console.log('correct');
// }else{
//     console.log('incorrect');
// }

// //Equal to value & type
// if(id === 100){
//     console.log('correct');
// }else{
//     console.log('incorrect');
// }

// //Equal to value & type
// if(id !== 100){
//     console.log('correct');
// }else{
//     console.log('incorrect');
// }

//Test if undefined
// if(typeof id !== 'undefined'){
//     console.log(`No ID ${id}`);
// }else{
//     console.log('No ID');
// }

//Greater or less than 
if(id >= 100){
    console.log('correct');
}else{
    console.log('incorrect');
}

//If else
const color = 'yellow';

if(color === 'red'){
    console.log('Color is red');
}else if(color === 'blue'){
    console.log('Color is blue');
}else{
    console.log('Color is yellow');
}

//Logical operator
const name = 'John';
const age = 18;

//AND

if(age > 0 && age < 10){
    console.log(`${name} is a child`);
}else if(age >= 13 && age <=19){
    console.log(`${name} is teenager`);
}else{
    console.log(`${name} is an adult`);
}

//OR

if(age < 16 || age > 65){
    console.log(`${name} can not run in race`);
}else{
    console.log(`${name} is registered for the race`);
}

// Ternary operator
console.log(id === 100 ? 'Correct' : 'Incorrect');

//Without braces
if(id === 100)
    console.log('Correct');
else
    console.log('Incorrect');