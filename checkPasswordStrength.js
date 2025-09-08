let checkPasswordStrength = (password) => {
    if(password.length >= 8) {
        return 'Strong';
    } else if(password.length <8 && password.length >=5) {
        return 'Medium';
    } else {
        return 'Weak'
    }
}

console.log(checkPasswordStrength('jhidjwiwjow5'));
