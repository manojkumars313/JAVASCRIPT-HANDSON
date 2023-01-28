// 2)

// function printNum() {
//   for (let i = 1; i <= 7; i++) {
//     setTimeout(() => {
//       console.log(i);
//     }, 1000 * i);
//   }
// }

// printNum();

//1)

// function Sum(a, b) {
//   return a + b;
// }
// function Me(name, value) {
//   console.log(name, value);
// }

// Me("MANOJ", Sum(5, 6));

//7)

// const promisefunc = new Promise((resolve, reject) => {
//   let count = 1;

//   if (count === 1) {
//     resolve("YES, count value is correct");
//   } else {
//     reject("NO, count value is wrong");
//   }
// });

// promisefunc
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err));

// Create a Promise, and check is the number even or ODD. and return the result on .then(Even) and .catch(Odd) method

// const OddEven = new Promise((resolve, reject) => {
//   let num = 10;

//   if (num % 2 === 0) {
//     resolve("YES,Promise Resolved");
//   } else {
//     reject("NO, Promise Rejected");
//   }
// });

// OddEven.then((result) => console.log(result)).catch((err) => console.log(err));

//note)))) Create a Promise, and pass two parameters, num1, and num2. if the multiplication
// of num1 and num2 is divisible by five, just return the product divisible by five in
// resolve statement else return Product not divisible by five in reject statements.

function givesSumofNumberAfterOneSecondPromise(a, b, c) {
  const pr = new Promise(function (res, rej) {
    setTimeout(function () {
      if ((a * b) / 5 === 0) {
        res("YES,  product divisible by five");
      } else {
        rej("No,  product is not divisible by five");
      }
    }, 1000);
  });

  return pr;
}

givesSumofNumberAfterOneSecondPromise(4, 5, 5)
  .then(function (data) {
    console.log(data);
  })
  .catch(function (err) {
    console.log(err);
  });
