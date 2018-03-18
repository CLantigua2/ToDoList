const toggleList = document.getElementById('toggleList');
const listDiv = document.querySelector('.list');
const descriptionInput = document.querySelector('input.description');
const descriptionP = document.querySelector('p.description');
const descriptionButton = document.querySelector('button.description');
const listUl = listDiv.querySelector('ul');
const addItemInput = document.querySelector('input.addItemInput');
const addItemButton = document.querySelector('button.addItemButton');
const clearListButton = document.querySelector('button.clearListButton');
const listItems = document.getElementsByTagName('li');
const lis = listUl.children;
const firstListItem = listUl.firstElementChild;
const lastListItem = listUl.lastElementChild;

//creates buttons for new li elements added to the DOM when the 'add Item' button is clicked, see addItem function
function attachListItemButtons(li) {
    let up = document.createElement('button');
    up.className = 'up';
    up.textContent = 'Up';
    li.appendChild(up);

    let down = document.createElement('button');
    down.className = 'down';
    down.textContent = 'Down';
    li.appendChild(down);

    let remove = document.createElement('button');
    remove.className = 'remove';
    remove.textContent = 'Remove';
    li.appendChild(remove);
}

for (let i = 0; i < lis.length; i += 1) {
    attachListItemButtons(lis[i]);
}

firstListItem.firstElementChild.style.visibility = 'hidden';
lastListItem.querySelector('.down').style.display = 'none';

//buttons that move or remove elements from the list
listUl.addEventListener('click', (event) => {
    if (event.target.tagName == 'BUTTON') {
        if (event.target.className == 'remove') {
            let li = event.target.parentNode;
            let ul = li.parentNode;
            ul.removeChild(li);
        }
        if (event.target.className == 'up') {
            let li = event.target.parentNode;
            let prevLi = li.previousElementSibling;
            let ul = li.parentNode;
            if (prevLi) {
                ul.insertBefore(li, prevLi); //specify the current first, next element second
                firstListItem.remove.className = 'remove';
                firstListItem.remove.textContent = 'Remove';
            }
        }
        if (event.target.className == 'down') {
            let li = event.target.parentNode;
            let nextLi = li.nextElementSibling;
            let ul = li.parentNode;
            if (nextLi) {
                ul.insertBefore(nextLi, li); // Specify the next element first, the current second.
            }
        }
    }
});

toggleList.addEventListener('click', () => {
    if (listDiv.style.display == 'none') {
        toggleList.textContent = 'Hide list';
        listDiv.style.display = 'block'; //if the button has hidden all elements, change button text to read a 'Hide list'
    } else {
        toggleList.textContent = 'Show list';
        listDiv.style.display = 'none'; //If objects are visible, have button text read a show
    }
});

descriptionButton.addEventListener('click', () => {
    descriptionP.innerHTML = descriptionInput.value + ':'; //changes the title based on what is entered into the descriptionInput value and adds : at the end
    descriptionInput.value = ''; //changes value to clear after user input is placed                                   
});

//button for adding nodes
addItemButton.addEventListener('click', () => {
    let ul = document.getElementsByTagName('ul')[0]; //grabs ul collection, [0] since there's only one ul on the page
    let li = document.createElement('li'); //creates li element
    li.textContent = addItemInput.value; //applies whatever is in the addItemInput value to this li element
    attachListItemButtons(li);
    ul.appendChild(li); //places the li that you just made into the ul that is already in the DOM
    addItemInput.value = ''; //changes input to clear after the user presses the add button
});

clearListButton.addEventListener('click', () => {
    let ul = document.getElementsByTagName('ul')[0].textContent = '';
});

//attempting to remove down button if element is the lastChild in the Ul
listDiv.addEventListener('click', () => {
    if (event.target.tagName == 'BUTTON') {
        firstListItem = listUl.firstElementChild;
        lastListItem = listUl.lastElementChild;
        firstListItem.firstElementChild.style.visibility = 'hidden';
        lastListItem.querySelector('.down').style.display = 'none';
        for (let i = 1; i < lis.length - 1; i += 1) {
            lis[i].firstElementChild.style.visibility = 'visible';
            lis[i].querySelector('.down').style.display = 'block';
        }
    }
});


//document.addEventListener('click', (event) => {
//    console.log(event.target);
//});