function RunLength(str) {

    // code goes here  
    let newItem = "";
  
    for (let i = 0; i < str.length; i++) {
      let counter = 1;
        for(let j = i; j < str.length; j++){
            if(str[i] !== str[j+1]){
                break;
            }
            counter++;
            i++;
        }
     newItem += counter +str[i];   
    }
    return newItem;
  
  }
  
  // keep this function call here 
  console.log(RunLength(readline()));