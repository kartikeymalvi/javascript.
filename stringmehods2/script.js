let name ="   kartikey   ";
  let trimmedtext=name.trim();
    // the trim method removes whitespaces from both sides of a string
     console.log(trimmedtext);

       // splitting a string into array
       const data ="this is a string which will spilt into array";
        const splittedData= data.split(" ");
          console.log(splittedData);


          // slice extracts the part of the string ,it takes 2 parameters
         //   1st is the starting position and second  is the ending position 
           // and ending position is not included


             const something= "javascript";
              const newData= something.slice( 0,4);
             console.log(newData);
             
             // substring =  it is similar to slice but cannot take negative values
              let  newData2 = something.substring(0,4);
               console.log(newData);


               // substar
               // 1st parameter starting position and 2nd parameter is length of string you want to extract 
                 newData =something.substr(0,20);
                 console.log(newData);
                 
                 
                 // Replace
                  const mystring ="All that glitter is not gold . gold is precious";
                   let newtext = mystring.replace("gold","silver");
                   console.log(newtext);
