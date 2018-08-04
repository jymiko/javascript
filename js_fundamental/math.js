const math1 = 150;
const math2 = 50;

let val;

//simple math with number;
val = math1 + math2;
val = math1 - math2;
val = math1 * math2;
val = math1 / math2;
val = math1 % math2;

// Math object
val = Math.PI;
val = Math.E;

// if range 2.1 until 2.5 it's gonna display on screen as 2 . 
// otherwise 2.6 until 3.0 it's gonna display as 3.

val = Math.round(2.6); 

val = Math.ceil(2.6); //to up value
val = Math.floor(2.6); // to down value 

val = Math.sqrt(81); // rank
 
// if you give a negative number , it's gonna convert to positive number .
// otherwise the others number you are input
val = Math.abs(-4);

val = Math.pow(9,2); // rank

val = Math.min(2,34,5,6,788,22,1,-2,-5); //minimum number of value
val = Math.max(2,34,5,6,788,22,1,-2,-5); //maximum number of value

val = Math.random();

val = Math.floor(Math.random() * 20 + 1); 

//output
console.log(val);
