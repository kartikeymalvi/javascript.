let mydata;
function myfunction()
{
    document.getElementById("demo").innerHTML+="Happy new year 2025!";
}


function display()
{
   mydata= setTimeout(myfunction,3000)
}
 function stop()
 {
    clearTimeout(mydata);
 }
 let mydata3;
 function mystart()
 {
   let  mydata2=parseInt(document.getElementById("demo2").innerHTML);
    mydata2++;
    document.getElementById("demo2").innerHTML=mydata2;
    mydata3= setTimeout(mystart,1000);
 }
    
 function mystop()
 {
    clearTimeout(mydata3)
 }
  let wdt=100;
 function myline()
 {
    let objc=document.getElementById("line");
    wdt=wdt+10;
    objc.style.width=wdt+"px";
    setTimeout(myline,1000)

 }