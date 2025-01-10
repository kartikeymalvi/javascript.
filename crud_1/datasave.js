document.getElementById("btn1").addEventListener("click", datainsert);
function datainsert() {
  let rno = document.getElementById("rno").value;
  let name = document.getElementById("name").value;
  let city = document.getElementById("city").value;
  let fees = document.getElementById("fees").value;
  let api = "http://localhost:3000/data";

  fetch(api, {
    method: "POST",
    headers: {
      "content-Type": "application/json",
    },
    body: JSON.stringify({
      "rollno": rno,
      "name": name,
      "city": city,
      "fees": fees,
    }),
  }).then((res) => {
    alert("data save");
  });
}
