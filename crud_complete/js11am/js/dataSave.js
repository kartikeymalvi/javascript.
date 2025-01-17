document.getElementById("btn1").addEventListener("click", dataInsert);
async function dataInsert()
{
   let rno=document.getElementById("rno").value;
   let nm=document.getElementById("nm").value;
   let city=document.getElementById("ct").value;
   let fees=document.getElementById("fs").value;
   let api="http://localhost:3000/students";

   const response= await fetch(api, {

    method: 'POST',
    headers: {
      'Content-Type': 'application/json' // Set content type to JSON
    },
    body: JSON.stringify({
      "rollno": rno,
      "name": nm,
      "city": city,
      "fees": fees
    })
   });
   alert("Data save!!!")
}