function RomanNumeralReduction(str) { 

    // code goes here
    var romanNum = {M : 1000, D : 500, C : 100, L : 50, X : 10, V : 5, I : 1};
    var count = 0;
    for(let i = 0; i < str.length; i++){
      const curr = romanNum[str[i]];
      const next = romanNum[str[i+1]];
      (curr < next) ? (count -= curr) : (count += curr);
    }
    var romanStr = ""; 
    for(var roman in romanNum){
      while(count >= romanNum[roman]){
        romanStr += roman;
        count -= romanNum[roman];
      }
    }
    return romanStr; 
  
  }
     
  // keep this function call here 
  console.log(RomanNumeralReduction(readline())); 

