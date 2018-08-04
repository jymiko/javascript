let val;
let val_2;

const today = new Date();
let birthday = new Date('06-28-1992 14:30:25');
birthday = new Date('June 28 1992');
birthday = new Date('06/28/1992');

val = today;
val = today.toString();
val_2 = birthday;

//get specific month, date, or day
val_2 = today.getMonth();
val_2 = today.getDate();
val_2 = today.getDay();
val_2 = today.getFullYear();
val_2 = today.getHours();
val_2 = today.getMinutes();
val_2 = today.getSeconds();
val_2 = today.getMilliseconds();
val_2 = today.getTime();

birthday.setMonth(2);
birthday.setDate(12);
birthday.setFullYear(1992);
birthday.setHours(5);
birthday.setMinutes(40);
birthday.setSeconds(21);

console.log(val);
console.log(typeof val);
console.log(val_2);
console.log(birthday);