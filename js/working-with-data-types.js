let a = 1;
let b = a++; //increments also changing a, b stays 1 b/c it still gets initial a
let c = ++a;
// what is the value of a, b, and c?
// predict a is 1, b is 2, c is 1
console.log(a, b, c);
// output is 3, 1, 3

let d = "hello";
let e = false;

d++;
e++;
// predict d is NaN, e is NaN
console.log(d, e);
// output is NaN, 1 (false/0 + 1 = 1)

let perplexed; // perplexed is undefined (no value is assigned)
perplexed + 2;
// predict perplexed is 2
console.log(perplexed);
// output is undefined

let price = 2.7;
price.toFixed(2);
// predict price is 2.70
console.log(price);
// output is 2.7 (price was not reassigned)

price = "2.7";
// price.toFixed(2);
// predict price is "2.7"
// console.log(price);
// output is price.toFixed is not a function


console.log(`
${isNaN(0)} predict false, is false
${isNaN(1)} predict false, is false
${isNaN("")} predict false, is false
${isNaN("string")} predict true, is true
${isNaN("0")} predict false, is false
${isNaN("1")} predict true, is false
${isNaN(0)} predict false, is false
${isNaN("3.145")} predict false, is false
${isNaN(Number.MAX_VALUE)} predict false, is false
${isNaN(Infinity)} predict false, is false
${isNaN(true)} predict false, is false
${isNaN("false")} predict true, is true
${isNaN(false)} predict false, is false
to illustrate why the isNaN() function is needed:
${NaN == NaN} is false
`)

console.log(`
!true   predict false, is 
${!true}
!false  predict true, is
${!false}
!!true  predict true, is
${!!true}
!!false predict false, is
${!!false}
!!0     predict false, is
${!!0}
!!-0    predict true, is
${!!-0}
!!1     predict true, is
${!!1}
!!-1    predict true, is
${!!-1}
!!0.1   predict true, is
${!!0.1}
!!"hello"   predict true, is
${!!"hello"}
!!""    predict false, is
${!!""}
!!''    predict false, is
${!!''}
!!"false"   predict true, is
${!!"false"}
!!"0"   predict false, is
${!!"0"}
`)
// Exercise 2
let sample = "Hello Codeup";
console.log(`number of characters is ${sample.length}`)
console.log(`uppercase is ${sample.toUpperCase()}`)
console.log(sample, `Students`);
sample = "Hello Codeup Students";
console.log(sample.replace("Students", "Class"));
console.log(`index of c is`, sample.indexOf("c"));
console.log(`index of C is`, sample.indexOf("C"));
console.log(`Using substring results in`, sample.substring(6, 12));
// Exercise 3
let firstMovie = 3;
let secondMovie = 5;
let thirdMovie = 1;
let totalCost = (firstMovie+secondMovie+thirdMovie)*3;
totalCost = totalCost.toFixed(2);
console.log(`total of rental ($3/d) is $`,totalCost);

let googleRate = 400;
let amazonRate = 380;
let facebookRate = 350;
let googleTotal = googleRate*6;
let amazonTotal = amazonRate*4;
let facebookTotal = facebookRate*10;
console.log(`Working with Google for 6hrs pays $`, googleTotal);
console.log(`Working with Amazon for 4hrs pays $`, amazonTotal);
console.log(`Working with Facebook for 10hrs pays $`, facebookRate);
console.log(`Total is $`, googleTotal+amazonTotal+facebookTotal);
// Exercise 4
let username = 'codeup';
let password = 'notastrongpassword';
let minimumChar = (password.length >=5);
    //the password must be at least 5 characters
    if(minimumChar) {
        console.log(`password meets the minimum character length`);
    } else {
        console.log(`password does not meet the minimum character length`);
    }
    //the password must not include the username
    if(password.includes(username)) {
        console.log(`password contains username, please change`);
    } else {
        console.log(`password does not contain username`);
    }
    //the username must be no more than 20 characters
    if(username.length <= 20) {
        console.log(`username does not exceed maximum character length`);
    } else {
        console.log(`username exceeds maximum character length`);
    }
    //neither the username or password can start or end with whitespace
    if((username.at(0)===" ") || (password.at(0)===" ")) {
        console.log(`username or password starts with space, please change`);
    } else {
        console.log(`username or password does not start with space`);
    }
    if((username.charAt(username.length-1)===" ") || (password.charAt(password.length-1)===" ")) {
        console.log(`username or password ends with space, please change`);
    } else {
        console.log(`username or password does not end with space`);
    }
