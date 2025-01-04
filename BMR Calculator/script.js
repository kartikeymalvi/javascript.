function men(){
     let name1= document.getElementById("name").value;
    let height=parseInt(document.getElementById("height").value);
    let weight= parseInt(document.getElementById("weight").value);
    let result= weight/ (height*height) *10000;

     document.getElementById("ans").innerHTML="your"+name1+"BMI "+result;
     
}
function women(){
    let name1= document.getElementById("name").value;
    let height=parseInt(document.getElementById("height").value);
    let weight= parseInt(document.getElementById("weight").value);
    let result= weight / (height*height) ;
      result=result*10000;
     document.getElementById("ans").innerHTML="your"+name1+"BMI "+result;

}