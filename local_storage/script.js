function datasave() {
  let mynm = document.getElementById("nm").value;
  localStorage.setItem("stuname", mynm);
  let myemail = document.getElementById("mail").value;
  localStorage.setItem("stuemail", myemail);
}



