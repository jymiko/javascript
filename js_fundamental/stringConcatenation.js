const firstName = 'Johnnn';
const lastName = 'Mayer';
const age = 27;
const text = 'Hello there my name is Brandon';
const tags = 'Web development, Web design, UI/UX';

let val;

val = firstName+lastName;

// Concatenation
val = firstName + ' '+ lastName;

// Append
val = 'Brad ';
val += 'Jonshon';

val ='Hello , my name is ' + firstName + ' and I am ' + age + ' years old ';

// Escaping
val = "That's awersome projects from the profesional developer";
val = 'That\'s awersome projects from the profesional developer';

// Length
val = firstName.length;

// Concat
val = firstName.concat(' ', lastName);

// Change case
val = firstName.toUpperCase();
val = firstName.toLowerCase();

// Get letter from index value
val = firstName[2];

// Get index from letter value
val = firstName.indexOf('n');
val = firstName.lastIndexOf('n');

// CharAt()
val = firstName.charAt('5');

// Get last char
val = firstName.charAt(firstName.length - 1);

// subString()
val = firstName.substring(0,2);

// slice()
val = firstName.slice(0,2);
val = firstName.slice(-1);

// split()
val = text.split(' ');
val = tags.split(',');

// replace()
val = text.replace('Brandon','Bucky');

// includes()
val = text.includes('Brithn');

console.log(val);
