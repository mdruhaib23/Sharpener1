// //examine the document object
console.dir(document);
console.log(document.dom);
console.log(document.URL);
console.log(document.title);
//document.title = 123;
console.log(document.doctype);
console.log(document.head);
console.log(document.body);
console.log(document.all);
console.log(document.all[10]);
//document.all[10].textContent = 'Hello';
console.log(document.forms[0]);
console.log(document.links);
console.log(document.images);

console.log(document.getElementById('header-title'));
var headerTitle = document.getElementById('header-title');
console.log(headerTitle);
headerTitle.textContent = 'Hello';
headerTitle.innerText = 'Goodbye';
console.log(headertitle.innerText);
headertitle.innerHTML = '<h3>Hello</h3>';
header.style.borderBottom = 'solid 3px #000';

// GETELEMENTSBYCLASSNAME //
var li = document.getElementsByTagName('list-group-item');
console.log(li);
console.log(li[1]);
li[1].textContent = 'hello 2';
li[1].style.fontWeight = 'bold';
li[1].style.backgroundColor='green';

//items.style.backgroundColor = '#f4f4f4';

for(var i=0;i<li.length;i++){
    li[i].style.backgroundColor = '#f4f4f4';
}

// QUERYSELECTOR //
var header = document.querySelector('#main-header');
header.style.borderBottom ='solid 4px #ccc';

var input = document.querySelector('input')
input.value = 'hello World'

var submit = document.querySelector('input[type="submit"]');
submit,it.value="SEND"

var item = document.querySelector('.list-group-item');
item.style.color = 'red';

var lastitem = document.querySelector('.list-group-item:last-chiild');
lastitem.style.color = ' blue';

var seconditem = document.querySelector('.list-group-item:nthchiild(2)');
seconditem.style.color = 'coral';

//QUERYSELECTORALL //
var title = document.querySelectorAll('.title');

console.log(titles);
titles[0].textContent = 'Hello';

var odd = document.querySelectorAll('li:nth-child(odd)');

for(var i = 0; i < odd,length; i++){
    odd[i].style.backgroundColor = '#f4f4f4';
    even[i].style.backgroundColor = '#ccc';
}

// TRAVERSING THE DOM //
var itemlist = document.querySelector('#items');
// parentElement//
console.log(itemlist.parentElement);
itemlist.parentElement.style.backgroundColor = '#f4f4f4';
console.log(itemlist.parentElement.parentElement.parentElement);
// childNode //
console.log(itemlist.childNodes)

console.log(itemlist.children);
console.log(itemlist.children[1]);
itemlist.children[1].style.backgroundColor = 'yellow';

//FirstChild
console.log(itemlist.firstChild);
// // firstElementChild //
console.log(itemlist.firstElementChild);
itemlist.lastElementChild.textContent = 'Hello 4';

//nextSibling
console.log(itemlist.nextSibling);
//nextElementSibling
console.log(itemlist.nextElementSibling);

//previousSibling
console.log(itemlist.previousElementSibling);
//previousElementSibling
console.log(itemlist.previousElementSibling);
itemlist.previousElementSibling.style.color = 'green';

// createElement

//Create a div
var newDiv = document.createElement('div');

//Add Class
newDiv.className = 'hello';

//Add id
newDiv.id = 'hello1';


//Add attr
newDiv.setAttribute('title','Hello Div');

//Create text node
var newDivText = document.createTextNode('Hello World');

//Add text to div
newDiv.appendChild(newDivText);

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');

console.log(newDiv);

newDiv.style.fontSize = '30px';

container.insertBefore(newDiv, h1);

