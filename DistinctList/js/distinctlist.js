//First Solution
function DistinctList(arr) { 
    let newArr = [...new Set(arr)];
    
    return arr.length - newArr.length; 
  
  }
     
  // keep this function call here 
  console.log(DistinctList(readline()));


//Second Solution
/*function DistinctList(arr) { 

    // code goes here  
    let counter = 0;
  
    for(let i = 0; i < arr.length; i++){
      for (let j = 0; j < arr.length; j++){
        if(arr[i] === arr[j] && i !==j){
            counter++;
          arr.splice(arr.indexOf(arr[i]), 1)
        }
      }
    }
  
    return counter; 
  
  }
     
  // keep this function call here 
  console.log(DistinctList(readline()));*/