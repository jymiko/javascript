//FOR
for(let i =0; i < 10; i++){
    console.log(i);
}

//While
let i = 0;

while(i < 10){
    console.log('Number '+i);
    i++;
}


//Loop through array
const cars = ['Suzuki','Honda'];

for(let i = 0; i < cars.length; i++){
    console.log(cars[i]);
}

//Foreach
cars.forEach(function(car){
    console.log(car);
});

//Map
const user =[
    {id:1, name:'Miko'},
    {id:2, name:'Sara'},
    {id:3, name:'Karin'}
];

const ids = user.map(function(user){
    return user.name;
});

console.log(ids);