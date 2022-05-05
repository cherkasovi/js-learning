const prompt = require('prompt-sync')();
  


const ask = (question, yes, no) => {
    prompt("Are you agree? ").toLowerCase() === 'Yes'.toLowerCase() ?
    yes() :
    no();
}

ask(
    "Are you agree?",
    () => console.log("You agreed"),
    () => console.log("You disagreed")
);