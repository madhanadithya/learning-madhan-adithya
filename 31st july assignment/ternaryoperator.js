// const { log } = require("console");

var age = 19;
var canDrive;
if (age > 16) {
 canDrive = 'yes';
} else {
 canDrive = 'no';
}
console.log(canDrive);


var age = 19;
var canDrive = age > 16 ? 'yes' : 'no';
console.log(canDrive);



function foo(bar) {
    bar = typeof(bar) !== 'undefined' ? bar : 10;
    console.log(bar);
}
foo();
foo(20); 


var authenticated = true;
var nextURL = authenticated ? (
alert('You will redirect to admin area'),'/admin') : (alert('Access denied'),'/403');
console.log(nextURL); 



var locked = 1;
var canChange = locked != 1 ? true : false;


var locked = 1;
var canChange = locked != 1;
console.log(canChange);


var speed = 90;
var message = speed >= 120 ? 'Too Fast' : (speed >= 80 ? 'Fast' : 'OK');
console.log(message);






