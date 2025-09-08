let canVote = (age) => {
    if(age>=18){
        return "can vote"
    } else {
        return "can't vote"
    }
}
console.log(canVote(26));
