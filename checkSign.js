let checkSign = (num) => {
    if(num === 0) {
        return 'Zero'
    } else if(num > 0 ) {
        return 'Positive Integer'
    } else if(num < 0) {
        return 'Negative Integer'
    } else{
        return 'ERR'
    }
}

console.log(checkSign(8));
