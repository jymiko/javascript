var name = 'Miko';
var age = 25;
var city = 'Malang';
var job = 'Front end web developer';

let html;

//Without template strings (es5)
html = '<ul><li>Name: '+ name + '</li><li>Age: ' + age + '</li><li>City: ' + city + '</li><li>Job: '+ job +'</li></ul>';

html = '<ul>' +
        '<li>Name : ' + name + '</li>' +
        '<li>Age : ' + age + '</li>' +
        '<li>City : ' + city + '</li>' +
        '<li>Job : ' + job + '</li>'+
        '</ul>';

function hello(){
    return 'hello';
}

//With template strings (es6)
html = `
    <ul>
        <li>Name : ${name}</li>
        <li>Age : ${age}</li>
        <li>City : ${city}</li>
        <li>Job : ${job}</li>
        <li>${ 2 + 2 }</li>
        <li>${hello()}</li>
        <li>${age > 27 ? 'Over 27' : 'Under 27'}</li>
    </ul>
`;

document.body.innerHTML = html;