async function mydisplay() {
  let myobj = await fetch("http://localhost:3000/students");
  // console.log(myobj);
  let mydata = await myobj.json();
  //console.log(mydata);
  let Table = `<table>
              
             <tr>
             <th> Roll NO </th>
             <th>  name </th>
             <th> city</th>
           
               </tr>

      `;
  mydata.map((key) => {
    Table += ` <tr>
              <td>${key.rollno}</td>
              <td>${key.name}</td>
              <td>${key.city}</td>
                  </tr>  `;
  });
  Table += `</table>`;
  document.getElementById("demo").innerHTML = Table;
}
