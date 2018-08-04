//Create some arrays

const number = [43,67,33,23,44,25,5];
const number2 = new Array(24,45,44,36,7);
const fruit = ['Apple','Mango','Orange','Pear'];
const mixed = [21,'Hello',true,undefined,null, {a:1,b:2},new Date()];

let val;

//Get array length
val = number.length;

//Check if is array
val = Array.isArray(number);

//Get single value 
val = number[3];
val = number[0];

//Insert into arrays
number[2] = 100;

//Find index of value
val = number.indexOf(100);

//Mutating arrays
//Add on to end
// number.push(250);
// //Add on to front
// number.unshift(120);

// //Take off from end 
// number.pop();
// //Take off from front
// number.shift();

// //Splice values
// //number index start and end 
// number.splice(1,2)

// //Reverse arrays
// number.reverse();

//Concatemate array
val = number.concat(number2);

//Sorting arrays
val = fruit.sort();
// val = number.sort();

// //Use the "compare function"
// val = number.sort(function(x,y){
//     return x - y;
// });

// //Reverse sort
// val = number.sort(function(x,y){
//     return y - x;
// });

//Find
function under50(num){
    return num < 50;
}

function over50(num){
    return num > 50;
}

val = number.find(under50);
val = number.find(over50);

console.log(number);
console.log(val);