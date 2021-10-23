const prompt = require("prompt-sync")();

const login = prompt("Enter login:\n");
const message =
    login === "employee"
        ? "Hi!"
        : login === "director"
        ? "Hello!"
        : "Login not found";

console.log(message);
