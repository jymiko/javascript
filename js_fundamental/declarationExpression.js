// FUNCTION DECLARATIONS

function greet(firstName){
    // console.log('Hello');
    return 'Hello ' + firstName;
}

console.log(greet('Doe'));

//FUNCTION EXPRESSION

const square = function( x = 8){
    return x*x;
};

console.log(square());

//IMMIDIATLEY INVOKABLE FUNCTION EXPRESSION - IIFEs

(function(){
    console.log('IIFE Ran');
})();

(function(name){
    console.log('Hello '+name);
})('Miko');

//Property Methods

const todo = {
    add: function(){
        console.log('Add todo');
    },
    edit: function(id){
        console.log(`Edit todo ${id}`);
    },
    delete: function(){
        console.log('Delete todo');
    }
}

todo.add();
todo.edit(5);
todo.delete();