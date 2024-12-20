const array1=[10,20,30,40,50]; //array litral
const array2 = new Array (1,2,3,4,5);
const array3 =[];
 array3[0]="BMW";
 array3[1]="Audi";
 array3[2]="Honda";
 array3[3]="porche";
 array3[4]="Range Rover";

   console.log(array1);
   console.log(array2);
   console.log(array3);
   // length method ====
   console.log(array3.length);


   // mixed array=====
   
   
     const mixed =[1,2,3,{name:"john",age:45},[20,40,50,60]];
       console.log(mixed[3].name);
        console.log(mixed[4][3]);
        console.log(mixed.length);

  const list=document.querySelector('.listitem')
  let main=" "

  for(let i=0;i<mixed.length;i++){

    main += `<li>${mixed[i]}</li>`
    list.innerHTML=main;
  }

  // concatination


  const number3=[1,2,3,4,5];
  
  const number4=[10,20,30,40,50];
  let newArray1= number3.concat(number4);
  console.log(newArray1);
  //push pop shift unshift array methods

  //push => adds a new element to the end of the array
  const names = ["lalit","semon","lala","anshul"];
  names.push("akshy");
  console.log(names);
// pop => removes an element from the end of the array
 names.pop();
   
 // unshift => adds a new element to the start of the array
   names.unshift("rohit");
   

