const data = require('../data/zoo_data');

function verificarVazio(entrants) {
  if (entrants === undefined || Object.keys(entrants).length === 0) {
    return 0;
  }
}
function totalDeCriancas(entrants) {
  const childTotal = entrants.reduce((contador, element) => {
    if (element.age < 18) { return contador + 1; }
    return contador;
  }, 0);
  return childTotal;
}

function totalDeAdultos(entrants) {
  const adultTotal = entrants.reduce((contador, element) => {
    if (element.age >= 18 && element.age < 50) { return contador + 1; }
    return contador;
  }, 0);
  return adultTotal;
}

function totalDeIdosos(entrants) {
  const seniorTotal = entrants.reduce((contador, element) => {
    if (element.age >= 50) { return contador + 1; }
    return contador;
  }, 0);
  return seniorTotal;
}
function countEntrants(entrants) {
  const keys = Object.keys(entrants);
  if (keys.length === 0) { return 0; }
  const childTotal = totalDeCriancas(entrants);
  const adultTotal = totalDeAdultos(entrants);
  const seniorTotal = totalDeIdosos(entrants);

  return { child: childTotal, adult: adultTotal, senior: seniorTotal };
}

function calculateEntry(entrants) {
  if (verificarVazio(entrants) === 0) {
    return 0;
  }
  const totalPagantes = countEntrants(entrants);
  const precoTotalChild = data.prices.child * totalPagantes.child;
  const precoTotalAdult = data.prices.adult * totalPagantes.adult;
  const precoTotalSenior = data.prices.senior * totalPagantes.senior;
  const faturamentoTotal = precoTotalAdult + precoTotalChild + precoTotalSenior;
  return faturamentoTotal;
}

module.exports = { calculateEntry, countEntrants };
