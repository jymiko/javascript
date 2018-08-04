//define object
const person = {
    firstName: 'Steve',
    lastName: 'Smith',
    age: 30,
    email: 'steve@mail.com',
    hobbies: ['music','reading'],
    address: {
        city: 'Brooklyn',
        state: 'US'
    },
    getBirthYear: function(){
        return 2018 - this.age;
    }
}

let val;

val = person;

//get specific value
val = person.firstName;
val = person['firstName'];
val = person.age;
val = person.hobbies[1];
val = person.address['city'];
val = person.getBirthYear();

console.log(val);

const people = [
  {name:'John', age:25},
  {name:'Duby', age:24},
  {name:'Maria', age:22} 
];

for(let i = 0; i < people.length; i++){
    console.log(people[i].name);
}