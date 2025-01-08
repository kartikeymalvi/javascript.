document.getElementById("btn1").addEventListener("click",mypassword);

function mypassword()
{
    let str="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890~!@#$%^&*";
    let strlength= str.length;
    let mypass="";
     for (var i=1;i<=7;i++)
     {
        var strind=Meth.floor(Meth.random()*strlength);
        mypass+=str.charAt(strind);
     }
     document.getElementById("demo").innerHTML=mypass;
}