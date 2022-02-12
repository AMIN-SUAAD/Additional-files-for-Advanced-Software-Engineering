const prompt = require("prompt-sync")();

const input = prompt("What is your email? ");

isValid = /\S+@\S+\.\S+/.test(input);

if (isValid) {
    console.log('You have a valid email address')
}
else{
    console.log('Your email address is not valid')
}


