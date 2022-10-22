//=========================================================

// Task-7-------
//Traversing the DOM:
let itemList=document.querySelector('#items');

//parentNode
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor="#ccc";
// console.log(itemList.parentNode.parentNode.parentNode);

//parentElement
console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor="#f4f4f4";
console.log(itemList.parentElement.parentElement.parentElement);

//childNode:
// console.log(itemList.childNodes);

console.log(itemList.children[1]);
itemList.children[1].style.backgroundColor='yellow';

//firstChild
// console.log(itemList.firstChild);
//firstElementChild:
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent='Hello 1';

//lastChild
// console.log(itemList.lastChild);
//lastElementChild:
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent='Hello 4';

//nextSibLing:
console.log(itemList.nextSibling);
//nextElemntSibLing:
console.log(itemList.nextElementSibling);

//previousSibling:
console.log(itemList.previousSibling);
//previousElementSibling:
console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.color='green';

//create a Element:

// create a div;
let newDiv= document.createElement('div');
//add a class
newDiv.className='Hello';
//add a id
newDiv.id='hello1';

//add attributes
newDiv.setAttribute('tital','hello');

//create text node
let newDivText=document.createTextNode('Hello World');

//add text to div
newDiv.append(newDivText);


let container=document.querySelector('header .container');
let h1=document.querySelector('header h1');

console.log(newDiv);

// 1) add HEllo word before Item Lister:
container.insertBefore(newDiv,h1);
newDiv.style.fontSize='30px';

//2) add HEllo word before Item 1
let div2=document.createElement('div');
let div2Text=document.createTextNode('Hello');
div2.append(div2Text);
console.log(div2);
let container2=document.querySelector('div .list-group');
let li=document.querySelector('div .list-group-item');

container2.insertBefore(div2,li);

//=======================================================================