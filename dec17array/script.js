const cars=["BMW","Honda","Porche","Audi"];
  const extreacted =cars.slice(1,3);
  // it extreats a part of an array and return the extracted array
  // it takes 2 parameter ==>
   console.log(extreacted);

   // splice method is used to add new items to an array
   // splice method takes 2 arguments 1st is starting index,2nd is
 //    the no of elements to remove ==>

    cars.splice(1,2,"nano","mercedes","xuv","alto" )
     console.log(cars);
      const mystring =cars.toString();
        console.log(mystring ,typeof mystring);


// join method also converts an array to a string but with a separator ==>
         const fruits=["Apple","watermelon","Orange","kiwi"];
           const newfruits=fruits.join("--");
             console.log(newfruits);
           // sort method sorts the array alphabatically ==>
           const sort=[ "a","f","t","b","c","g","d"];
           const newsort=sort.sort();
              console.log(newsort);
              // reverse method reverses an array ==>
               const reversed= newsort.reverse();
                console.log(reversed);

        //compare function to sort an array of numbers               
                const numbers =[100,20,75,2,988];
                const numsort= numbers.sort()
            