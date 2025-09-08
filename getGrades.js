let getGrades = (marks) => {
    if (marks>100) {
        return "ERROR"
    }
    else if(marks>= 90) {
        return "A+"
    } else if(marks<90 && marks>=75 ) {
        return "A"
    } else if(marks<75 && marks>=55 ) {
        return "B"
    } else if(marks<55 && marks>=40 ) {
        return "C"
    } else if(marks<40 && marks>=35) {
        return "D"
    } else {
        return "Fail"
    }
}

console.log(getGrades(136));
