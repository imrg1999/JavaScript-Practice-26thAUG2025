let findLargest = (a,b,c) => {
    let largest = 0;
    if(a> b && a>c) {
        return `a:${a} is largest`
    } else if(b> a && b>c) {
        return `b:${b} is largest`
    } else if(c>a && c>b) {
        return `c:${c} is largest`
    }
}
console.log(findLargest(10,8,14));
