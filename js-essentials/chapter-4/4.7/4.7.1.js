function User(name) {
  this.name = name;
  this.money = 1000;
  this[Symbol.toPrimitive] = function (hint) {
    return hint == "string" ? `{name: "${this.name}"}` : this.money;
  };
}

const Vika = new User("Vika");
const Ihor = new User("Ihor");
Ihor.money = 2000;

console.log(Ihor < Vika);
