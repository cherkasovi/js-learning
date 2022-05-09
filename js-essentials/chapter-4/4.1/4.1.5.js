// до вызова функции
let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};
const newMenu = menu;
multiplyNumeric(menu);

displayObject(menu);

displayObject(newMenu);

function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] === "number") {
      obj[key] *= 2;
    }
  }
}

function displayObject(obj) {
  for (let key in obj) {
    console.log(key + ": " + obj[key]);
  }
}
