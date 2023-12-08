var form = document.getElementById('addForm');
var itemlist = document.getElementById('items');

// Form submit event
form.addEventListener('submit', addItem);
// Delet event
itemlist.addEventListener('click', remeveItem);


//Add item
function addItem(e){
    e.preventDefault();

    // Get input value
    var newItem = document.getElementById('item').value;

    // Create  new li element
    var li = document.createElement('li');
    // Add class
    li.className = 'list-group-item';
    // Add text node with input value
    li.appendChild(document.createTextNode(newItem));

    //create del button element
    var deleteBtn = document.createElement('button');
    
    // Add classes to del button
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    
    // Append etxt node
    deleteBtn.appendChild(document.createTextNode('X'));

    // Append button to li
    li.appendChild(deleteBtn);

    // Append li to list
    itemlist.append(li);
}

// Remove item
function removeItem(e){
    if(e.target.classlist.contains('delete')){
        if(confirm('are you sure?')){
            var li = e.target.parentElement;
            itemlist.removeChild(li);
        }
    }
}