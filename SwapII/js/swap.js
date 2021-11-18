function SwapII(str) { 
   
    // code goes here  
    str = [...str].map(
        function (c) {
        if (c === c.toLowerCase()) {
            return c.toUpperCase();
        } else if (c === c.toUpperCase()) {
            return c.toLowerCase();
        }
        }
    ).join('');

    let re =/(\d+)(\w+)(\d+)/g;
    let replace = "$3$2$1"
    str = str.replace(re, replace);
    return str; 
    
    
  
  }
     
  // keep this function call here 
  console.log(SwapII(readline()));
  