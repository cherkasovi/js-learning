import { Helper } from "../../support/helper.js";

function Accumulator(startingValue) {
  this.value = startingValue;
  this.read = function () {
    return (this.value += +Helper.readln("Enter a value: "));
  };
}

const accumulator = new Accumulator(1); // начальное значение 1

accumulator.read(); // прибавит ввод prompt к текущему значению
accumulator.read(); // прибавит ввод prompt к текущему значению

console.log(accumulator.value); // выведет сумму этих значений
