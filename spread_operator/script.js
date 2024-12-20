// spread oprator
//you can copy an object or array into anoter object or array using it
const person={

name:"johhny depp",
 age:60,
 location:"london",
};
const person2={...person,hobby:"dance"};
 console.log(person2);

 // array
  const number=[1,2,3,4,5,6];
  const number2=[...number, 7,8,9,10];
   console.log(number2);
   // rest parameter 

   function display(...num){

    console.log (num);
   }
   display(10,20);
   display(10,20,30);
   display(10,20,30,40);

   // W A function that calculates the sum of the given numbers


    function sumAll(...num1){

        let total=0;
         for(let num  of num1){
                 total +=num;
         }
            return total;  

    }
      console.log(sumAll(10,20,30));
      console.log(sumAll(10,20,30,40,50));

                 // introduction==>
                // 1.name 2.from 3.highest graduation and branch and then 12th and 10th
                // 4. cybrom fsd pythons 5.projects and internships thank you.