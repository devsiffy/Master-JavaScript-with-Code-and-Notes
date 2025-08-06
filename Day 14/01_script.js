// -------- Selectors

const title = document.getElementById("title");
// console.log(title);

const listItems = document.getElementsByClassName("list-items");
// console.log(listItems);

const paras = document.getElementsByTagName("p");
// console.log(paras);

const newTitle = document.querySelector("#title");
// console.log(newTitle);

const subHeading = document.querySelector(".sub-heading");
// console.log(subHeading);

const inputField = document.querySelector("input[type=number]");
// console.log(inputField);

const infoParas = document.querySelectorAll(".info");
// console.log(infoParas);

// -------- Other Properties

// console.log(title.innerText);
// console.log(title.textContent);
// console.log(title.innerHTML);

// title.innerText = "JS Course";
// console.log(title.innerText);

// console.log(title.getAttribute("class"));
// title.setAttribute("class", "main-heading"); // overwrites
// title.setAttribute("class", "main-heading heading"); // to keep all classes
// console.log(title.getAttribute("class"));

subHeading.style.backgroundColor = "#0a562c";
subHeading.style.padding = "10px";
subHeading.style.borderRadius = "12px";

/*
    HTML Collection return by "getElementsByClassName()" selecter, and NodeList return by "querySelectorAll()" selecter, are not exactly arrays. NodeList support forEach (check on its prototype) only.
    So, to use array methods we first need to convert them into array like below then we use array methods.
*/

// HTML Collection
// console.log(listItems);
// console.log(listItems[0]);

const collectionArr = Array.from(listItems);
// console.log(collectionArr);

collectionArr.forEach((item) => {
  item.style.color = "orange";
});

// NodeList
// console.log(infoParas);
// console.log(infoParas[0]);

const listArr = Array.from(infoParas);
// console.log(listArr);

listArr.forEach((item) => {
  item.style.color = "skyblue";
});
