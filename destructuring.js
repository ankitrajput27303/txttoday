// @1=>

let a, b;
[a, b] = [34, 544];
// console.log(a, b);


[a, b, c, ...d] = [1,2,3,4,5,6,7,8,9];
// a me 1 , b me 2 , c me 3 , and ...d me all array ban ke pass ho jynge.
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);


// same Object me 
//Array Destructuring
({a, b, c, ...d} = {a: 34, b:345, c:65, d:98, e:54})
// console.log(a, b, c, d);


const fruits = ['Apple', 'Bananas', 'Mangoes'];
[a, b, c] = fruits;
// console.log(a, b, c);


// Object Destructuring
const laptop = {
    model: "HP Pavilion",
    age: "23 days",
    gender: "Male",
    net: 1233,
    start: function () {console.log('started');}
}

const {model, age, gender} = laptop;
// console.log(model, age, gender);
