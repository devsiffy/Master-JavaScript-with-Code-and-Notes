// ----- To Create Elements & Add Into DOM

const div = document.createElement("div");
div.setAttribute("id", "main");

document.body.append(div);

const h1 = document.createElement("h1");
h1.setAttribute("id", "main-heading");
h1.setAttribute("class", "title heading");
h1.innerText = "DOM Manipulation";

div.append(h1);

const ul = document.createElement("ul");
document.body.append(ul);

for (let i = 1; i <= 5; i++) {
  const li = document.createElement("li");
  li.setAttribute("class", "items");
  li.style.color = "orange";
  li.innerText = `List Item ${i}`;
  ul.append(li);
}

// --- to get element parent
// console.log(ul.parentElement);

// --- to get element childrens
// console.log(ul.children);

// --- to get element previous sibling
// console.log(ul.previousSibling);

// --- to get element next sibling
// console.log(div.nextSibling);
