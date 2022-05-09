const salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

const sum = getSum(salaries);

function getSum(salaries) {
  let sum = 0;

  for (employeeSalary in salaries) {
    sum += salaries[employeeSalary];
  }

  return sum;
}

console.log(sum);
