// document.querySelector('.clear-tasks').addEventListener('click',
// function(e){
//     console.log('hello world');
//     e.preventDefault();
// });

document.querySelector('.clear-tasks').addEventListener('click',
onclick);

function onclick(e){
    let val;

    val = e;

    // event target element
    val = e.target;
    val = e.target.id;
    val = e.target.className;
    val = e.target.classList;

    e.target.innerText = 'Button clicked';

    // event type
    val = e.type;

    // timestamp
    val = e.timeStamp;

    //coords event relative to the window
    val = e.clientY;
    val = e.clientX;

    val = e.offsetY;
    val = e.offsetX;

    console.log(val);

}