import promptSync from "prompt-sync";
const prompt = promptSync();
//const prompt = require("prompt-sync")();

export class Helper {
  constructor() {}

  static displayObject(obj) {
    for (let key in obj) {
      if (typeof obj[key] !== "object" && obj[key] !== null) {
        console.log(key + ": " + obj[key]);
      } else {
        if (obj[key] === null) {
          console.log(key + ": " + String(obj[key]));
        } else {
          this.displayObject(obj[key]);
        }
      }
    }
  }

  static readln(question = "", value = 0) {
    return prompt(question, value);
  }
}
