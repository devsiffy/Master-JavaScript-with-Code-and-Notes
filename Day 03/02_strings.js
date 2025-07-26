/*
    Approach 1: to define the string
*/

let str1 = "Morning";

// console.log(str1);
// console.log(str1[0]);
// console.log(str1[1]);

/*
    Approach 2: to define the string
*/

let str2 = new String("World");

// console.log(str2);
// console.log(str2[0]);
// console.log(str2[1]);

// ***** String Prototype *****

// console.log(str2.__proto__);

/*
    Trying different methods of string;
    "explained on notes"
*/

let str3 = "Hi, How are you? What are you doing?";

// 1. anchor()

let value1 = str3.anchor("link");
// console.log(value1);

// 2. at()

let value2 = str3.at(5);
// console.log(value2);

// 3. big()

let value3 = str3.big();
// console.log(value3);

// 4. bold()

let value4 = str3.bold();
// console.log(value4);

// 5. charAt()

let value5 = str3.charAt(8);
// console.log(value5);

// 6. charCodeAt()

let value6 = str3.charCodeAt(1);
// console.log(value6);

// 7. codePointAt()

let value7 = str3.codePointAt(0);
// console.log(value7);

// 8. concat()

let value8 = str3.concat("\n", "Good Morning");
// console.log(value8);

// 9. endsWith()

let value9 = str3.endsWith("?");
// console.log(value9);

let value10 = str3.endsWith("H", 6);
// console.log(value10);

// 10. fontcolor()

let value11 = str3.fontcolor("red");
// console.log(value11);

// 11. fontsize()

let value12 = str3.fontsize(5);
// console.log(value12);

// 12. includes()

let value13 = str3.includes("?");
// console.log(value13);

let value14 = str3.includes("!");
// console.log(value14);

// 13. indexOf()

let value15 = str3.indexOf("?");
// console.log(value15);

let value16 = str3.indexOf("!");
// console.log(value16);

// 14. italics()

let value17 = str3.italics();
// console.log(value17);

// 15. lastIndexOf()

let value18 = str3.lastIndexOf("o");
// console.log(value18);

// 16. length

let value19 = str3.length;
// console.log(value19);

// 17. link()

let value20 = str3.link("https://google.com");
// console.log(value20);

// 18. localeCompare()

let value21 = str3.localeCompare("Hello");
// console.log(value21);

let value22 = str3.localeCompare("Zoom");
// console.log(value22);

// 19. padEnd()

let value23 = str3.padEnd(40, "!");
// console.log(value23);

// 20. padStart()

let value24 = str3.padStart(40, "*");
// console.log(value24);

// 21. repeat()

let value25 = str3.repeat(2);
// console.log(value25);

// 22. replace()

let value26 = str3.replace("H", "N");
// console.log(value26);

// 23. replaceAll()

let value27 = str3.replaceAll("H", "N");
// console.log(value27);

// 24. slice()

let value28 = str3.slice(4, 21);
// console.log(value28);

// 25. split()

let value29 = str3.split(" ");
// console.log(value29);

// 26. startsWith()

let value30 = str3.startsWith("Hi");
// console.log(value30);

let value31 = str3.startsWith("What");
// console.log(value31);

// 27. strike()

let value32 = str3.strike();
// console.log(value32);

// 28. sub()

let value33 = str3.sub();
// console.log(value33);

// 29. substr()

let value34 = str3.substr(4, 9);
// console.log(value34);

// 30. substring()

let value35 = str3.substring(4, 9);
// console.log(value35);

// 31. sup()

let value36 = str3.sup();
// console.log(value36);

// 32. toLocaleLowerCase()

let value37 = str3.toLocaleLowerCase();
// console.log(value37);

// 33. toLocaleUpperCase()

let value38 = str3.toLocaleUpperCase();
// console.log(value38);

// 34. toLowerCase()

let value39 = str3.toLowerCase();
// console.log(value39);

// 35. toString()

let value40 = str3.toString();
// console.log(value40);

// 36. toUpperCase()

let value41 = str3.toUpperCase();
// console.log(value41);

// 37. trim()

let value42 = "    World        ".trim();
// console.log(value42);

// 38. trimStart() or trimLeft()

let value43 = "    World  ".trimStart();
// console.log(value43);

// 39. trimEnd() or trimRight

let value44 = "    World      ".trimRight();
// console.log(value44);

// 40. valueOf()

let value45 = str3.valueOf();
// console.log(value45);
