function Palindrome(str) { 

    // code goes here  
    str = str.replace(/ /g,"").toLowerCase();
    let compareStr = str.split("").reverse().join("");
  
    if(compareStr === str){
      return true;
    }else{
      return false;
    }
  
    return str; 
  
  }
     
  // keep this function call here 
  console.log(Palindrome(readline()));