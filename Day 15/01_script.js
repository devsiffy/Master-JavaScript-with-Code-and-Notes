const mainDiv = document.querySelector("#main");

const ul = document.createElement("ul");
mainDiv.append(ul);

// function to add items (li) in list (ul)

function addListItems(text) {
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(text));
  ul.append(li);
}

addListItems("Python");
addListItems("JavaScript");
addListItems("GoLang");
addListItems("Ruby");
addListItems("PHP");

// function to edit items (li) of list (ul)

function editListItems(text, item) {
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(text));
  item.replaceWith(li);
}

let item = document.querySelector("li:nth-child(3)");
editListItems("Java", item);

// function to delete items (li) from list (ul)

function deleteListItem(item) {
  item.remove();
}

deleteListItem(document.querySelector("li:first-child"));
deleteListItem(document.querySelector("li:last-child"));
