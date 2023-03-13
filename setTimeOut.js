// @1=>

// setTimeout => ka use tab karenge jab hame kuch time bad hamare -
// - javascript code ko exucute karenge.

// setInterval => ka use karenge jab ham logo ko bar bar after -
// - a set perad of time apni javascript code ko exucute karenge.

// ek timer id return me milti hai .

// alert("Hello");

// setTimeout(function() {
//     alert('I am inside of setTimeOut');
// }, 5000);


// let a = setTimeout(function() {
//     alert('I am inside of setTimeOut');
// }, 5000);
// console.log(a);  // timer id hai.


// let a = setTimeout(function() {
//     alert('I am inside of setTimeOut');
// }, 5000);
// clearTimeout(a);  // let a bale time ko stop kar rha hu
// console.log(a);  // timer id hai.


// let a = setTimeout(function() {
//     alert('I am inside of setTimeOut');
// }, 5000);
// let b = prompt("Do you want to run the settimeout?");
// if("n" == b) {
//     clearTimeout(a);
// }
// clearTimeout(a);
// console.log(a);


// const sum = (a, b) => {
//     console.log("Yes I am running " + (a + b));
//     a + b;
// }
// setTimeout(sum, 1000, 1, 2);


// setInterval => bar bar run karta rhta hai. har second

// setInterval(function () {
//     alert("setInterval");
// }, 3000);


// @2=>
// setTimeout ---> Allows us to run the function once after the interval of time..
// clearInterval ---> Allows us to run the function repeatedly after the interval of time.

// setTimeout me do argument hote hai first function second time 
// and miltipal argument v pass kar skte hai jese ->

function greet(name, byeText) {
    // console.log("Hello Good Morning " + name + " " + byeText);
}
setTimeout(greet, 5000, "Herry", "Take Care");
// setTimeout me only function ka name denge, () nhi denge..

// setTimeout return krta hai ek time out id -> us id ko use kar skte ho clearTimeout ke sath..


// setInterval =>
function greet(name, byeText) {
    // console.log("Hello Good Morning " + name + " " + byeText);
}
setInterval(greet, 5000, "Herry", "Take Care");
// setInterval function ko bar bar run karta jata hai..
// setInterval v return krta hai time out ki id.


// @3=>
let timeoutId = setTimeout(myFunction, 5000);

function myFunction() {
    // alert("Please subscribe..");
}

clearTimeout(timeoutId);  // time out id 


// setInterval v same upr jesa..