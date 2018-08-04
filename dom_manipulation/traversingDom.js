let val;

const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');

val = listItem;
val = list;

// get child nodes
// on output text is line break
val = list.childNodes;

//select one values from childNodes
val = list.childNodes[1];

// get nodes name
val = list.childNodes[1].nodeName;

//get nodes type
val = list.childNodes[1].nodeType;

//information
// 1 - Element
// 2 - Attribute (deprecated)
// 3 - Text node 
// 8 - Comment
// 9 - Document itself
// 10 - Doctype 


//get children element nodes
val = list.children;
val = list.children[1];
list.children[1].textContent ='Hello';

//Children of children

//insert id to children
list.children[3].children[0].id='test-link';
val = list.children[3].children[0];

//first child will gonna give you first node
val = list.firstChild;
val = list.firstElementChild;

val = list.lastChild;
val = list.lastElementChild;

//count child elements
val = list.childElementCount;

//get parents nodes
val = listItem.parentNode;
val = listItem.parentElement;
val = listItem.parentElement.parentElement;

//get next sibling
val = listItem.nextSibling;
val = listItem.nextElementSibling;

//get previous sibling
val = listItem.previousSibling;
val = listItem.previousElementSibling;

console.log(val);