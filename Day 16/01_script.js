const ulList = document.querySelector("#images");
const orangeRose = document.querySelector("#orange-rose");

// Approach 1: to listen for an event (older)
// orangeRose.onclick = function () {
//   alert("This is an orange rose.");
// };

// Approach 2: to listen for an event (better recommended)
// orangeRose.addEventListener("click", function () {
//   alert("This is an orange rose.");
// });

// event object in callback of event listener
// orangeRose.addEventListener("click", function (event) {
//   console.log(event);
// });

/*
    Events object have following properties (you must know);
    type, timestamp, preventDefault, target, toElement,
    srcElement, currentTarget, clientX, clientY,
    screenX, screenY, altKey, ctrlKey, shiftKey, keyCode
*/

/*
    Now there are some few concepts;
    -> Event Propagation
    -> Event Bubbling (value is 'false' as 3rd parameter of event listener callback)
    -> Event Capturing (value is 'true' as 3rd parameter of event listener callback)

    NOTE:- By-default 3rd parameter of event listener callback is 'false'.
    Concepts are explained in below code..!
*/

// ------ Event Bubbling

// ulList.addEventListener(
//   "click",
//   function (e) {
//     console.log("I am ul tag");
//   },
//   false
// );

// orangeRose.addEventListener(
//   "click",
//   function (e) {
//     // this below line used to stop the event bubbling (propagation from child to parent)
//     // e.stopPropagation();
//     console.log("I am img (inside li) tag");
//   },
//   false
// );

// orangeRose.addEventListener(
//   "click",
//   function (e) {
//     console.log("I am img (inside li) tag");
//   },
//   false
// );

// ------ Event Capturing

// ulList.addEventListener(
//   "click",
//   function (e) {
//     console.log("I am ul tag");
//   },
//   true
// );

// orangeRose.addEventListener(
//   "click",
//   function (e) {
//     console.log("I am img (inside li) tag");
//   },
//   true
// );

/*
    "preventDefault" is an event method to prevent the default behaviour of HTML elements e.g.,
    -> stop the form to reload page when submitting it
    -> stop the anchor tag to redirect to another page (example code below)
*/

const anchorLink = document.querySelector("#link");

// anchorLink.addEventListener("click", (e) => {
//   e.preventDefault();
// });
