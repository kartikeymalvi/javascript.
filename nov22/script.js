
//function expression

const display1=function(){
    alert("function expression called");

}


//arrow function
const display2=()=>{
    alert("arrow funtion called");
}



// whenever you pass a function as an argument never use ()
//you can call regular function before declareation but not arrow function 
// and function expression


 let button=document.getElementById("btn");
 button.addEventListener("click",display);
 button.addEventListener("mouseover",function(){
 console.log("hello from eventlisner event");
});

// query selector
let h1 =document.querySelectorAll("h1");
console.log(h1);
h1[0].innerHTML="hello query selector";
h1[0].style.color="red";
h1[0].style.backgroundColor="blue";
h1[1].style.backgroundColor="black";
