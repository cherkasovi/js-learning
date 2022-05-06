import { Helper } from "../../support/helper.js";

function deepClone(obj) {
  const copy = {};
  for (let key in obj) {
    if (typeof obj[key] === "object" && obj[key] !== null) {
      copy[key] = {};
      copy[key] = deepClone(obj[key]);
    } else {
      copy[key] = obj[key];
    }
  }

  return copy;
}

const user = {
  name: "Иван",
  body: {
    height: 182,
    weight: 82,
  },
};

const copyUser = deepClone(user);

copyUser.body.height = null;

Helper.displayObject(user);
console.log();
Helper.displayObject(copyUser);
