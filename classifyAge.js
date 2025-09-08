let classifyAge = (age) => {
    if(age >= 0 && age <= 12) {
        return "Child"
    } else if(age >= 13 && age <=19) {
        return "Teen"
    } else if (age >= 20 && age < 60) {
        return "Adult"
    } else if(age > 60) {
        return "Senior"
    }
}

console.log(classifyAge(69));
