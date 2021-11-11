// First Solution

function SimpleMode(arr) { 

  let newArr = arr.sort();
  let findItem = [];
  for(let i=0; i<newArr.length; i++){
    for(let j=0; j<newArr.length; j++){
      if(arr[i] === arr[j] && i!==j){
        findItem.push(arr[i])
      }
    }
  }
  let lastItem = [...new Set(findItem)]
  let modVal;
  if(lastItem.length == 0){
    return -1;
  }else if(lastItem.length > 1){
    modVal = Math.min(...lastItem)
    return modVal;
  }else{
    return lastItem[0]
  }
 
}
  
// keep this function call here 
console.log(SimpleMode(readline()));



// Second Solution

/*function SimpleMode(arr) { 
 
    let m = new Map();
  
    for (n of arr) {
      if (!m.has(n)) {
        m.set(n, 1);
      } else {
        m.set(n, m.get(n)+1);
      };
    };
  
  
    let hnum = [...m.entries()].reduce((a,e) => e[1]>a[1] ? e: a)[0]
    return m.get(hnum) == 1 ? -1 : hnum
  
  
  }
     
  // keep this function call here 
  console.log(SimpleMode(readline())); */