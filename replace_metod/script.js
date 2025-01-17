let str = " we are cybrome students from CYBROME CYBrome CYBROme";
document.getElementById("demo").innerHTML = str;
let str1 = str.replace(/cybrome/ig, "Bhopal");
document.getElementById("demo1").innerHTML = str1;

let pat = "is this hhunod this to finf hhhhhh hnbjbjvhhh";
let pattern1 = /[h]/g;
let result = pat.match(pattern);
document.getElementById("pat").innerHTML = result;

//   in that i means =uppercasse lowercase alphabets ko bhi replace kr skte hai
//   in that g means =uppercasse globally kisi ko bhi replace kr skte hai

// let pat2 = "I SCREAM Fo@R iCe cream";
// document.getElementById("pat2").innerHTML = pat2;
// let result1 = pattrn2.match((/a-e/ig, /@/ig));
// let pattrn2 = pat2.match(pattern);

// document.getElementById("demo3").innerHTML = result1;
let pat2 = "I SCREAM Fo@R iCe cream";

// Define a regex pattern to match
let pattern = /[a-e@]/ig; // Matches any letter from 'a' to 'e' (case-insensitive) or the '@' symbol

// Find matches in the string
let result1 = pat2.match(pattern);

// Display the result
document.getElementById("demo3").innerHTML=result1 // Logs matches to the console
// If using in HTML:
// document.getElementById("demo3").innerHTML = result1.join(", ");

