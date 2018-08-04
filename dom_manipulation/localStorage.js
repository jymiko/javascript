// // set local storange

// localStorage.setItem('name','John');

// // set session storange

// sessionStorage.setItem('name','John');

// remove from storange
// localStorage.removeItem('name');

//get from storange
// const name = localStorage.getItem('name');

// // clear
// localStorage.clear();
// console.log(name);

document.querySelector('form').addEventListener('submit',
function(e){
    //only store one task
    const task = document.getElementById('task').value;

    //make array
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    }else{
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.push(task);

    localStorage.setItem('tasks',JSON.stringify(tasks));


    alert('task save');

    e.preventDefault();
}
);

const tasks = JSON.parse(localStorage.getItem('tasks'));

tasks.forEach(function(task){
    console.log(task);
});