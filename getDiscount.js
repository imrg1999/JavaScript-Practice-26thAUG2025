let getDiscount = (price) => {
    if(price > 1000) {
        return price - (price*20/100);
    } else if(price >=500 && price <1000) {
        return price - (price*10/100)
    } else {
        return `${price}`;
    }
}

console.log("The final price is",getDiscount(499));
