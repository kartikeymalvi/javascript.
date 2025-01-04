// function mydata() {
//   document.getElementById("demo1").innerHTML += "happy new year! <br>";
// }
// setInterval(mydata, 5000);


let myint1;


function value() {
  document.getElementById("demo1").innerHTML += "cybrom <br>";
}
function start() {
  myint1 = setInterval(value, 1000);
}
function stop() {
  clearInterval(myint1);
}

let myint;
function mycount() {
  let mynum = Number(document.getElementById("demo").innerHTML);
  mynum++;
  document.getElementById("demo").innerHTML = mynum;
}

function mystart() {
  myint = setInterval(mycount, 1000);
}
function mystop() {
  clearInterval(myint);
}

function myclear() {
  clearInterval(myint);
  document.getElementById("demo").innerHTML = 0;
}
