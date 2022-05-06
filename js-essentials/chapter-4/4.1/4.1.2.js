const schedule = {};

console.log(isEmpty(schedule)); // true

schedule["8:30"] = "get up";

console.log(isEmpty(schedule)); // false

function isEmpty(schedule) {
  for (property in schedule) {
    return false;
  }

  return true;
}
