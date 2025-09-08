let calculateBill = (units) => {
    if(units <= 100) {
        return `for ${units} units the charge is ${units*5} rs/-`
    } else if(units >= 100 && units < 300) {
        return `for ${units} units the charge is ${units*7} rs/-`
    } else if(units > 300) {
        return `for ${units} units the charge is ${units*10} rs/-`
    }
}

console.log(calculateBill(240));
