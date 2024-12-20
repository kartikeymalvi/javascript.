
document.getElementById("myForm").addEventListener("submit",validate);
function validate(e){
    // to prevent the default behavior of form submission
    e.preventDefault();
    let myname=document.getElementById("name").value ;
    let myemail=document.getElementById("email").value;
    let mypassword=document.getElementById("password").value;
    let mypassword1=document.getElementById("confirmPassword").value;
    let mynumber=document.getElementById("number").value;
    let mydob=document.getElementById("date").value;
    console.log(myname,myemail,mynumber,mypassword,mydob);
    if(myname==""|| myemail==""|| password==""|| number==""|| mydob==""){
        alert("All fields are required");
        return false;
    }
    alert("form submitted successfully");
    return true;
}
if(password !== confirmPassword){
    alert("password does not match")
    return false;
}
alert("form submitted successfully");