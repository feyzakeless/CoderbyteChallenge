function NimWinner(arr) { 

    const xor = (p, c) => p^c;

    return arr.reduce(xor)==0 ? 2 : 1;

}
    
// keep this function call here 
console.log(NimWinner(readline()));