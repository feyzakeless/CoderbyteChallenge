// First Solution

function VowelCount(str) { 

    let vowels = ["a", "e", "i", "o", "u"];
    let newStr = str.toLowerCase();
    counter = 0;
    for(let letter of newStr){
      if(vowels.includes(letter)){
        counter++;
      }
    }
    // code goes here  
    return counter; 
  
  }
     
  // keep this function call here 
  console.log(VowelCount(readline()));
  



// Second Solution

/*function VowelCount(str) { 

    // code goes here  
    let m = str.match(/[aeiou]/gi);
    return m === null ? 0: m.length;
  
  }
     
  // keep this function call here 
  console.log(VowelCount(readline())); */