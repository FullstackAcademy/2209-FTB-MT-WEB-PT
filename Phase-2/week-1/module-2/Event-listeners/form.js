var form = document.getElementById('addForm');

var itemList = document.getElementById('items');

form.addEventListener('submit', addItem);

filter.addEventListener('keyup', filterItems);

itemList.addEventListener('click', removeItem);
function addItem(e){
    e.preventDefault();
    console.log('here')

    // Get input value
    var newItem = document.getElementById('item').value;

    //Create new LI element

    var li = document.createElement('li');
    
    // add class
    li.className = "list-group-item";

    console.log(li);
    li.appendChild(document.createTextNode(newItem));

    var button = document.createElement('button');

    console.log(button);
    button.className = "btn btn-danger btn-sm float-right delete";

    button.appendChild(document.createTextNode('X'));

    li.appendChild(button);
    itemList.appendChild(li);
}
function removeItem(e){
    e.preventDefault();

    if(e.target.classList.contains('delete')){
        console.log('delete');
        if(confirm('Are you sure?')){
            var li = e.target.parentElement;
            console.log(li);
            itemList.removeChild(li);
        }
    }

}

function filterItems(e){
    e.preventDefault();

    //convert to lowercase
    var text = e.target.value.toLowerCase();
    
    console.log(text);

    var items = itemList.getElementsByTagName('li');
    
    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;
        console.log(itemName);
        // compare items to list
        if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block';
    
        } else {
            item.style.display = 'none';
        }
    });
}