let bankWithdraw = (balance, amount) => {
    if(amount> balance) {
        return `Insufficient Funds, remaining balance is: ${balance}`
    } else if (amount < balance) {
        return `Withdraw Successful, remaining balance is: ${balance - amount}`
    }
}

console.log(bankWithdraw(75000,4000));
