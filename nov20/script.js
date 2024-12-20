function addition(){
    let num1= parseInt(document.getElementById("input1").value);
    let num2= parseInt(document.getElementById("input2").value);
    var result=num1+num2;
    document.getElementById("demo").innerHTML=result;
}
function subtraction(){
    let num1= parseInt(document.getElementById("input1").value);
    let num2= parseInt(document.getElementById("input2").value);
    var result=num1-num2;
    document.getElementById("demo").innerHTML=result;
}
function multiplication(){
   let num1=parseInt(document.getElementById("input1").value);
   let num2= parseInt(document.getElementById("input2").value);

   var result=num1*num2;
   document.getElementById("demo").innerHTML=result;
}
function divide(){
    let num1=parseInt(document.getElementById("input1").value);
    let num2=parseInt(document.getElementById("input2").value);
    var result=num1/num2;
    document.getElementById("demo").innerHTML=result;
}
function display(){
    let display1= document.getElementById("myinput").value;
    document.getElementById("demo").innerHTML=display1;
    
}