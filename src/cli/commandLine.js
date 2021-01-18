
const prompt = require('prompt');
const readline = require("readline");
const rotasAppService = require('../appServices/rotasAppServices');
const rotaResultDto = require('../dtos/rotaResultDto');
const { EventEmitter } = require('events')
const schema = {
  properties: {
    parametros: {
      description: 'Please enter the route',
    },
  }
}
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

class Cli extends EventEmitter {
  inicializaPrompt() {
    rl.question('Por favor digite uma rota > ', (params) => {
      const parametros = params.split('-');
      if (parametros.length == 2) {
        const resultado = rotasAppService.calculaMelhorRota(parametros[0], parametros[1]);
        console.log(rotaResultDto.criarRotaResultDto(resultado));
      } else {
        console.log('Parâmetros origem e destino são obrigatórios')
      }
      this.inicializaPrompt();
    });
  }
}
module.exports = Cli