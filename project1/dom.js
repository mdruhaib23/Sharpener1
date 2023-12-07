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


