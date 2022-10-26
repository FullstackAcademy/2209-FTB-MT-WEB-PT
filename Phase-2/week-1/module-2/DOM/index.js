/* Examine the Document Object*/
/* console.dir(document); */
/*
// local host.
console.log(document.domain);
console.log(document);
console.log(document.URL);
console.log(document.title)
console.log(document.head);
console.log(document.body);
console.log(document.all);
console.log(document.all[10]);
console.log(document.forms[0]);
console.log(document.links);

// GET ELEMENT BY ID //

var headerTitle = document.getElementById("header-title");
var header = document.getElementById('main-header');
console.log(headerTitle);
headerTitle.textContent = "Hello"; // text content would pay attention to styling, if the display is none it will still print
headerTitle.innerText = "GoodBye";
headerTitle.innerHTML= "<h3> HELLO </h3>" // puts html inside of DOM element.

header.style.borderBottom = 'solid 3px black';

// GET ELEMENTS BY CLASS NAME

var items = document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[1]);
items[1].textContent= "Hello 2";
items[2].style.fontWeight = "bold";
items[2].style.backgroundColor= 'yellow';
// WILL NOT WORK- cant just assign all of them to blue
// items.style.backgroundColor = "blue";
// HAVE TO LOOP
for(var i= 0; i< items.length; i++){
    items[i].style.backgroundColor="lightgrey";
}

//GET ELEMENTS BY TAG NAME
var li = document.getElementsByTagName('li');
console.log(li);
console.log(li[1]);
li[2].style.fontWeight = "normal";

for(var i= 0; i< li.length; i++){
    li[i].style.backgroundColor="brown";
}

// QUERYSELECTOR

var header = document.querySelector('#main-header');
console.log(header);
header.style.borderBottom = "solid 6px lightgrey";

var input = document.querySelector('input');
input.value = "Hello World"; // will only change the first one

var submit = document.querySelector('input[type="submit"]');
submit.value = "SEND";

var item= document.querySelector(".list-group-item");
item.style.color = "red";

var lastItem = document.querySelector(".list-group-item:last-child");
lastItem.style.color = "blue";

var secondItem = document.querySelector(".list-group-item:nth-child(2)");
secondItem.style.color="pink";

//QUERY SELECTOR ALL
var titles = document.querySelectorAll(".title");
console.log(titles);
titles[0].textContent = "Hello";

var odd = document.querySelectorAll("li:nth-child(2n-1)");
var even = document.querySelectorAll("li:nth-child(2n)");
for(let i =0; i < odd.length; i++){
    odd[i].style.backgroundColor = "lightgrey";
    even[i].style.backgroundColor = "darkgrey";

}

//TRAVERSING THE DOM //
// querying parent, children and siblings
var itemList = document.querySelector('#items');

// look at the parent node
console.log(itemList.parentNode);
itemList.parentNode.style.backgroundColor = "lightgrey";
console.log(itemList.parentElement.parentNode);

//child node
console.log(itemList.childNodes) 
console.log(itemList.children) // ignores line breaks

console.log(itemList.children[1]);
itemList.children[1].style.backgroundColor = "blue";


console.log(itemList.firstChild);

//THIS WOULD WOULD ACTUALLY GIVES US THE FIRST LI
console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent = "Hello";

console.log(itemList.lastElementChild);
itemList.lastElementChild.textContent = "WHOOPPS";

// Siblings
var nextSibiling = itemList.nextElementSibling;
console.log(nextSibiling);

var prevSibling = itemList.previousElementSibling;
console.log(prevSibling);
prevSibling.style.color="green";


//CREATE ELEMENTS

var newDiv = document.createElement('div');
 newDiv.className ="hello";
 newDiv.id = "hello1";

 newDiv.setAttribute('title', "Hello Div");

 // create text node
 var newDivText = document.createTextNode("Hello world");

 // add text to div
 newDiv.appendChild(newDivText);

 var insideContainter = document.querySelector("header .container");
 var h1 = document.querySelector('header h1');

 newDiv.style.fontSize ="30px";

 //append
 insideContainter.insertBefore(newDiv, h1);

console.log(newDiv);

// ADD AN EVENT LISTENER
var button = document.getElementById('button')

function buttonClick(e) {
    // document.querySelector('#main').style.backgroundColor="#f4f4f4";
    // document.getElementById("header-title").textContent= "Changed";
    // console.log('click here!!')
   // console.log(e);
   console.log(e.target);
   console.log(e.target.id);
   console.log(e.target.className);
   var output = document.getElementById('output');
   output.innerHTML = "<h3>" + e.target.id + "</h3>";

}
// button.addEventListener('mouseup', runEvent);

function runEvent(e) {
    console.log('Event Type' + e.type);
}

var box =  document.getElementById('box');
box.addEventListener('mouseenter', runEvent2)

function runEvent2(e) {
    console.log('Hello ' + e.type);
    box.style.background = "#f4f4f5"
}

//KEY BOARD INPUTS EVENTS

var itemInput = document.querySelector('input[type="text"]');

var form = document.querySelector('form');

itemInput.addEventListener('keydown', runEvent);
itemInput.addEventListener('keyup', function(){console.log('done')});

itemInput.addEventListener('focus', runEvent);
itemInput.addEventListener('blur', runEvent);
itemInput.addEventListener('input', runEvent);

// ON FORM 
var select = document.querySelector('select');

select.addEventListener('change', getOptions);
select.addEventListener('input', getOptions);

function getOptions(e) {
console.log(e.target.value);
}

form.addEventListener('submit', submitForm);

function submitForm(e){
    e.preventDefault();
  console.log(e.type);
}
*/

