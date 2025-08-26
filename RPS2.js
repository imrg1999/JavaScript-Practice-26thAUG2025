function RPS(user,computer) {
    if(user === computer) {
        return "draw";
    } else if (user === "rock" && computer === "scissors" || user === "scissors" && computer === "paper" || user === "paper" && computer === "rock") {
        return "user";
    } else {
        return "computer"
    }
}

console.log("The Winner is:" +RPS("paper","scissors"));
console.log("The Winner is:" +RPS("rock","scissors"));
console.log("The Winner is:" +RPS("scissors","scissors"));
