let checkTriangle = (a,b,c) => {
    if(a===b && b===c) {
        return 'Equilateral Triangle'
    } else if (a!==b && a!=c && b!==c) {
        return 'Scalene Triangle'
    } else {
        return 'Isosceles Triangle'
    }
}

console.log(checkTriangle(8,10,15));
