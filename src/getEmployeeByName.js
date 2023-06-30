const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  const employeeNomeEUltimoNome = data.employees.find((element) =>
    element.firstName === employeeName || element.lastName === employeeName);
  return employeeNomeEUltimoNome;
}

module.exports = getEmployeeByName;
