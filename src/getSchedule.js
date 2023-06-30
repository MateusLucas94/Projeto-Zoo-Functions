const data = require('../data/zoo_data');

function verifDiaIncluso(diaDaSemana) {
  const animalInclusoNoDia = data.species.filter((element) =>
    element.availability.includes(diaDaSemana));
  const nomeDeCadaAnimal = animalInclusoNoDia.map((element) => element.name);
  return nomeDeCadaAnimal;
}
function condicaoDaSegunda(incluirHoras, index, incluirAnimalNaSemana) {
  let info;
  if (incluirHoras[index].open !== 0) {
    info = {
      officeHour: `Open from ${incluirHoras[index].open}am until ${incluirHoras[index].close}pm`,
      exhibition: incluirAnimalNaSemana[index],
    };
  } else {
    info = {
      officeHour: 'CLOSED',
      exhibition: 'The zoo will be closed!',
    };
  }
  return info;
}

function criarOObjeto(scheduleTarget) {
  const diasDaSemana = Object.keys(data.hours);
  const incluirAnimalNaSemana = diasDaSemana.map((element) => verifDiaIncluso(element));
  const incluirHoras = Object.values(data.hours);
  const criadoObjeto = {};
  diasDaSemana.forEach((element, index) => {
    criadoObjeto[element] = condicaoDaSegunda(incluirHoras, index, incluirAnimalNaSemana);
  });
  return criadoObjeto;
}

function seEhAnimalOuSemana(scheduleTarget) {
  const nomeDosAnimais = data.species.map((element) => element.name);
  const diasDaSemana = Object.keys(data.hours);
  if (nomeDosAnimais.includes(scheduleTarget) || diasDaSemana.includes(scheduleTarget)) {
    return true;
  }
  return false;
}

function verificarParametroEhDia(scheduleTarget) {
  const diasDaSemana = Object.keys(data.hours);
  if (diasDaSemana.includes(scheduleTarget)) {
    return true;
  }
  return false;
}

function getSchedule(scheduleTarget) {
  if (scheduleTarget === undefined || seEhAnimalOuSemana(scheduleTarget) === false) {
    return criarOObjeto();
  }
  if (verificarParametroEhDia(scheduleTarget) === true) {
    const nomeDoOBjeto = {};
    nomeDoOBjeto[scheduleTarget] = criarOObjeto()[scheduleTarget];
    return nomeDoOBjeto;
  }
  const nomeDosAnimal = data.species.find((element) => element.name === scheduleTarget);
  return nomeDosAnimal.availability;
}
console.log(getSchedule('Tuesday'));
module.exports = getSchedule;
