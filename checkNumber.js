let checkNumber = (num) => {
    if(num === 0) {
        return 'Zero'
    } else if(num%2 === 0) {
        return 'Even'
    } else if(num === 1){
        return 'Odd'
    }
}

console.log(checkNumber(0));
