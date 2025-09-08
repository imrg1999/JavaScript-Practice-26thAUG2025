let checkDivisibility = (num) => {
    if(num%3 === 0 && num%5 === 0 ) {
        return `${num} is divisible by both 3 & 5`
    } else if(num%3 === 0) {
        return `${num} is divisible by only 3`
    } else if(num%5 === 0) {
        return `${num} is divisible by only 5`
    } else {
        return `${num} is not divisible by either 3 or 5`
    }
}

console.log(checkDivisibility(150));
