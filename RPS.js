function RPS(user,computer) {
    if(user === "rock" && computer === "scissors") {
        return "user";
    } else if(computer === "rock" && user === "scissors") {
        return "computer";
    } else if(user === "paper" && computer === "scissors") {
        return "computer";
    } else if(user === "scissors" && computer === "paper") {
        return "user";
    } else if(user === "paper" && computer === "rock") {
        return "user";
    } else if(user === "rock" && computer === "paper") {
        return "computer";
    }
}

console.log("Winner is:"+ RPS("scissors","paper"));
