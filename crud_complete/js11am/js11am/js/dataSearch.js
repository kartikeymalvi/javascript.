document.getElementById("btn1").addEventListener("click", mySearch);
async function mySearch()
{
   let rollno= document.getElementById("rno").value;
   let api=`http://localhost:3000/students/?rollno=${rollno}`;
   const myObj= await fetch(api);
   const Data= await myObj.json();
   let TAB=`<table border="1" bgcolor="pink" width="500px" >
              <tr>
                <th> Rollno </th>
                <th> Name </th>
                <th> City </th>
                <th> Fees</th>
              </tr>  
             `
        Data.map((key)=>{
            TAB+=`
                 <tr>
                 <td>${key.rollno}</td>
                 <td>${key.name}</td>
                 <td>${key.city}</td>
                 <td>${key.fees}</td>
                </tr> 
              `       
        })
        TAB+="</table>";
        document.getElementById("demo").innerHTML=TAB;
}