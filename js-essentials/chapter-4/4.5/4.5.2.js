import { Helper } from "../../support/helper.js";

function Calculator() {
  this.read = function () {
    this.first = +Helper.readln("Enter first number: ");
    this.second = +Helper.readln("Enter second number: ");
  };
  this.sum = function () {
    return this.first + this.second;
  };
  this.mul = function () {
    return this.first * this.second;
  };
}

const calculator = new Calculator();

calculator.read();
console.log(calculator.sum());
console.log(calculator.mul());
