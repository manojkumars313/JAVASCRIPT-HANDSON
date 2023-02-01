//1)
// const parent = {
//   detail() {
//     console.log(
//       `My name is ${this.name} and i am from ${this.location} and my age is ${this.age}`
//     );
//   },
// };
// const firstChild = Object.create(parent);
// firstChild.name = "EA19";
// firstChild.location = "Bangalore";
// firstChild.age = "23";

// const firstSecond = Object.create(parent);
// firstSecond.name = "Manoj";
// firstSecond.location = "KA";
// firstSecond.age = "23";

// firstChild.detail();
// firstSecond.detail();

//2)

// const calcSum = new Array(1, 2, 3, 4, 5);
// calcSum.__proto__.sum = function (givenArray) {
//   let count = 0;
//   for (let i = 0; i < calcSum.length; i++) {
//     count += calcSum[i];
//   }

//   return count;
// };

// let result = calcSum.sum(calcSum);
// console.log(result);

// A programming assignment to design a web app for designing a pizza would involve creating auser interface that allows the user to drag and drop a pizza base from a list of available optionsinto an empty circle. Once the base is selected, a list of ingredients should appear that the usercan then drag and drop onto the base. As the ingredients are added, the image of the pizzashould be updated to incorporate the added ingredients. The app should not require the user tobe able to remove ingredients from the pizza.

// 11PB_Buddy_Dev

// let baseObject = {
//   name: "base object",
//   sayName: function () {
//     console.log(this.name);
//   },
// };

// let myObject = Object.create(baseObject);
// myObject.name = "Manoj";
// myObject.sayName();

// function getAllPropertyNames(obj) {
//   let properties = [];

//   do {
//     properties = properties.concat(Object.getOwnPropertyNames(obj));
//     obj = Object.getPrototypeOf(obj);
//   } while (obj !== null);

//   return properties;
// }
// let obj = {
//   name: "My Object",
//   getName: function () {
//     return this.name;
//   },
// };

// let properties = getAllPropertyNames(obj);
// console.log(properties); // Output: [ "name", "getName" ]

// function DisplayData(PassYear, age, College) {
//   this.PassYear = PassYear;
// }

// DisplayData.prototype.name = "EA19";
// const data = new DisplayData(2021, 23, "Prepbytes");
// console.log(data);
// console.log(data.name, data.PassYear); // Output:

// function details(year, marks, location) {
//   this.year = year;
//   this.marks = marks;
//   this.location = location;
// }
// details.prototype.curyear = "2023"; //2023
// const data = new details(2022, 67, "AP"); //details { year: 2022, marks: 67, location: 'AP' }
// console.log(data.name);
