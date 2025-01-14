async function dataShow()
{
  let api="http://localhost:3000/students";
  let Table="<table border='1'><tr><th>Rollno</th><th>Name</th><th>City</th><th>Fees</th></tr>";

      const myObj= await fetch(api);
      //console.log(myObj);
      const Data= await myObj.json();
      console.log(Data);
       Data.map((item)=>{
               Table+=`<tr>
                         <td> ${item.rollno} </td>
                         <td> ${item.name} </td>
                         <td> ${item.city} </td>
                         <td> ${item.fees} </td>
                       </tr> `
           })
           Table+="</table>  <br><br>  <h2>Display data using fetch method</h2>";
           document.getElementById("demo").innerHTML=Table;


let Table1="<table border='1'><tr><th>Rollno</th><th>Name</th><th>City</th><th>Fees</th></tr>";
    fetch(api).then((res)=>{
        // console.log(res);
        return res.json()
    }).then((Data)=>{


           Data.map((item)=>{
               Table1+=`<tr>
                         <td> ${item.rollno} </td>
                         <td> ${item.name} </td>
                         <td> ${item.city} </td>
                         <td> ${item.fees} </td>
                       </tr> `
           })

           Table1+="</table>";
           document.getElementById("demo1").innerHTML=Table1;
        console.log(Data);
    }).catch((err)=>{
        console.log(err);
    });   
}
dataShow();