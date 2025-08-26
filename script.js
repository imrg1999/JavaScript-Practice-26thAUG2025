function getGrade(n) {
    if(n>100 || n<0) {
        return "ERROR";
    } else if(n<=100 && n>=90) {
        return "Grade: A+"
    } else if(n<90 && n>=80) {
        return "Grade: A"
    } else if(n<80 && n>=70) {
        return "Grade: B"
    } else if(n<70 && n>=60) {
        return "Grade: C"
    } else if(n<60 && n>=35) {
        return "Grade: D"
    } else {
        return "Fail"
    }
}

console.log("Result:"+getGrade(91));
