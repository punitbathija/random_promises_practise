// let myHeros = ["Spiderman", "Thor"];
// let dcHeros = ["Batman", "Superman", "Black Adam"];

// let heroPowers = {
//   Thor: "hammer",
//   Spiderman: "sling",

//   getSpiderPower: function () {
//     console.log(`Spidy Power is ${this.Spiderman}`);
//   },
// };

// Object.prototype.punit = function () {
//   console.log(`Punit is present in all the objects`);
// };
// myHeros.punit();

// //hey array  -> total elemets are  ___

// Array.prototype.heyArray = function () {
//   console.log(`Total Number of ELements are ${this.length}`);
// };

// Object.prototype.hiddenPower = function () {
//   console.log(`Is One Of the Avenger`);
// };

// //Prototypal Inheritance

// const User = {
//   name: "Example",
//   email: "example@gmail.com",
// };

// const Teacher = {
//   makeVideos: true,
// };

// const TeachingSupport = {
//   isAvalable: false,
// };

// const TSAssignment = {
//   makeAssignment: "JS Assignment",
//   fullTime: true,
//   __proto__: TeachingSupport,
// };

// // Teacher.__proto__ = User; // => Oldest Syntax
// // Teacher.prototype = User; // => Doable Syntax
// Object.setPrototypeOf(Teacher, User); // => Latest Syntax Modern
// Object.setPrototypeOf(TeachingSupport, Teacher); // => Latest Syntax Modern

// //Small Challange

// String.prototype.TrueLength = function () {
//   console.log(`true length is ${this.trim().length}`);
// };

// console.log("Punit".TrueLength());
// console.log("Punit  ".TrueLength());

// // true length

//Event loop

// const userOne = () => {
//   setTimeout(() => {
//     console.log("Hello I am User One logging after 2 seconds");
//   }, 2000);
//   console.log("Hello I am the first user trying to log something");
// };

// const userTwo = () => {
//   console.log("I am the Second User");
//   setTimeout(() => {
//     console.log("Hello I am the Second user logging after 5 seconds");
//   }, 5000);
// };

// const thirdUser = () => {
//   console.log("Hello I am the Third User");
// };

// userOne();
// userTwo();
// thirdUser();

//Promises
//Promises Using Constructor

// const makePromise = new Promise((res, rej) => {
//   setTimeout(() => {
//     const arrOne = ["userOne", "userTwo", "userThree"];
//     if (arrOne.length > 5) {
//       res("User Found");
//     } else {
//       rej("User Not Found");
//     }
//   }, 2500);
// });

// makePromise
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((rej) => {
//     console.log(rej);
//   });

//Async & Await

const userOne = () => {
  return "I am User One";
};

const userTwo = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("user found");
    });
  });
};

const userThree = () => {
  return "I am User Three";
};

const userFour = () => {
  return "I am User Four";
};
