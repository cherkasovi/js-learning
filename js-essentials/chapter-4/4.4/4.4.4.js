import { Helper } from "../../support/helper.js";

const calculator = {
  read() {
    this.first = +Helper.readln("Enter first number: ");
    this.second = +Helper.readln("Enter second number: ");
  },
  sum() {
    return this.first + this.second;
  },
  mul() {
    return this.first * this.second;
  },
};

calculator.read();
console.log(calculator.sum());
console.log(calculator.mul());
