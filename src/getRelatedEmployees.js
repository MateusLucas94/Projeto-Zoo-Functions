const data = require('../data/zoo_data');

function isManager(id) {
  const ehGerente = data.employees.some((element) => element.managers.includes(id));
  return ehGerente;
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId) === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  const funcDoGerente = data.employees.filter((element) => element.managers.includes(managerId));
  const nomeESobrenome = funcDoGerente.map((element) => `${element.firstName} ${element.lastName}`);
  return nomeESobrenome;
}

module.exports = { isManager, getRelatedEmployees };
