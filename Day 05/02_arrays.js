const marvel_heros = ["thor", "ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

// marvel_heros.push(dc_heros);
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

const all_heros = marvel_heros.concat(dc_heros);
// console.log(all_heros);

const arr_1 = [...marvel_heros, ...dc_heros];
// console.log(arr_1);

const arr_2 = [1, 2, 3, [4, 5, 6], 7, [8, 9, [4, 10, 11]]];
const arr_3 = arr_2.flat(Infinity);
// console.log(arr_3);

// console.log(Array.isArray("devsiffy"));

// console.log(Array.from("devsiffy"));

// Below return an [] array because we need to specify that, array is created based on object keys or values
// console.log(Array.from({ course: "JS Mastery" }));

// based on keys & values
// console.log(Array.from(Object.keys({ course: "JS Mastery" })));
// console.log(Array.from(Object.values({ course: "JS Mastery" })));

let num1 = 100,
  num2 = 200,
  num3 = 300;

// console.log(Array.of(num1, num2, num3));
