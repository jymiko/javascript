// // Window methods / Objects / Properties

// console.log(123);

// // Alert
// // window.alert("Hello alert!"); or 
// alert("Hello alert!");

// //Prompt
// const input = prompt();
// alert(input);

// //Confirm
// if(confirm('Are you sure ?')){
//     console.log('YES');
// }else{
//     console.log('NO');
// }

//outer height and width
let val;
val = window.outerHeight;
val = window.outerWidth;
console.log(val);

//inner height and width
let val2;
val2 = window.innerHeight;
val2 = window.innerWidth;
console.log(val2);

//scroll points
let val3;
val3 = window.scrollX;
val3 = window.scrollY;
console.log(val3);

//location 
let val4;
val4 = window.location;
val4 = window.location.hostname;
val4 = window.location.port;
val4 = window.location.search;
console.log(val4);

//redirect 
// window.location.href = 'https://google.co.id';

//reload
// window.location.reload();

//history object
// window.history.go(-2);
val5 = window.history.length;
console.log(val5);

//Navigator object
val6 = window.navigator;
val6 = window.navigator.appName;
val6 = window.navigator.appVersion;
val6 = window.navigator.userAgent;
val6 = window.navigator.platform;
val6 = window.navigator.vendor;



console.log(val6);