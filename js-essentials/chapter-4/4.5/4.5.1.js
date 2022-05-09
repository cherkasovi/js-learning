function A() {
  return Object;
}
function B() {
  return Object;
}

let a = new A();
let b = new B();

console.log(a == b); // true
