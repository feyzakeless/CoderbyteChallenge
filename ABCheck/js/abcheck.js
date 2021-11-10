function ABCheck(str) { 

    let newStr = str.toLowerCase().split("");

    for(let i = 0; i < newStr.length; i++){

      if(newStr[i] === "a"  && newStr[i+4] === "b"  ){
        return true;
      }

      else if(newStr[i] === "b"  && newStr[i+4] === "a"  ){
        return true;
      }

    }


    return false;


  }

  // keep this function call here 
console.log(ABCheck(readline())); 