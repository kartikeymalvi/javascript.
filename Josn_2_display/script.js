async function display() {
  let data = await fetch("http://localhost:3000/details");
  let jsondata = await data.json();

  let datatable = ` <table>
                     <tr>
                        <th>name</th>             
                        <th>age</th>             
                        <th>gender</th>             
                         <th>contact</th>             
        
        
                     `;
  jsondata.map((data) => {
    datatable += ` <tr>
                      <td>${data.name}</td>
                      <td>${data.age}</td>
                      <td>${data.gender}</td>
                      <td>${data.contact}</td>
                       </tr> `;
  });
  datatable += `</table>`;
  document.getElementById("demo").innerHTML = datatable;
}
