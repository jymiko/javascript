//String
//primitive value
const name1 = 'Jack';
const name2 = new String('Jeff');

// name2.foo = 'bar';
console.log(name1);
console.log(name2); 

console.log(typeof name2);

if(name2  === 'Jack'){
    console.log('YES');
}else{
    console.log('NO');
}


//const number
const bool1 = true;
const bool2 = new Boolean(true);

//function
const getSum1 = function(x, y){
    return x + y;
}

const getSum2 = new Function('x','y', 'return 1+1');

console.log(getSum1(3, 4));
console.log(getSum2(3, 4));

//object
const john1 = {name: "John"};
const john2 = new Object({name: "John"});
console.log(john1);
console.log(john2);

//arrays
const arr1 = [1,2,3,4];
const arr2 = new Array(1,2,3,4);
console.log(arr1);
console.log(arr2);

//regular expression
const reg1 = /\w+/;
const reg2 = new  RegExp('\\w+');

console.log(reg1);
console.log(reg2);