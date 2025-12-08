"use strict"; // treat all js code as newer version
// alert(3+3)  will not work as it is a NODE JS not browser
console.log(3+3);
console.log("parth")

console.log(typeof undefined); //iska datatype undefined hai 
console.log(typeof null);//iska datatype object hai

// lets take a string 
let score="33abc"
let value=Number(score)
console.log(typeof value) //it is showing type number 
// but value is logging not a number
console.log(value)

// convertion in number
// "33"-> 33
// "33abc"-> NaN
// Null-> 0
// true->1   false ->0


// similalry boolean or string mai bhi convert kar sakte hai