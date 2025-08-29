let reverseAString = (n) => {
    let reverse = "";
    for(let i =n.length-1 ; i>= 0; i--){
        reverse += n[i];
        
    }
    
    return reverse;
    
}
console.log(reverseAString("Hello"));