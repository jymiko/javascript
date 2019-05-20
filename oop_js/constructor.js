// simple fill value example

// const brad = {
//     name: 'Brad',
//     age: 30
// }

// console.log(brad)
// console.log(brad.age)

//Person constructor
//Constructor diawali dengan huruf besar
function Person(name, dob){
    this.name = name;
    // this.age = age;
    this.bithday = new Date(dob);
    this.calculateAge = function(){
        const diff = Date.now() - this.bithday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
    console.log(this);
}

const brad = new Person('Brad', '9/10/1988');
const john = new Person('John', '7/7/1994');
console.log("Brad age is : " + brad.calculateAge());
console.log("John age is : " + john.calculateAge());
