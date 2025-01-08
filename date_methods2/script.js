// in date method 7 parameter is given in which at lest 2 parameter is required which is
// year and month

const d = new Date("2018-03-25");
const d2 = new Date("29 10 1999");
const d3 = new Date("oct 20 1999");
const d4 = new Date("25 mar 1999");
document.write("<h1>",d,"</h1>");
document.write("<h1>",d2,"</h1>");
document.write("<h1>",d3,"</h1>");
document.write("<h1>",d4,"</h1>");

var date=new Date();  
var day=date.getDate();  
var month=date.getMonth()+1;  
var year=date.getFullYear();  
document.write("<br>Date is: "+day+"/"+month+"/"+year);  