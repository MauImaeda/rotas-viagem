
const prompt = require('prompt');
const rotasAppService = require('../appServices/rotasAppServices');
const rotaResultDto = require('../dtos/rotaResultDto');
const { param } = require('../routes');
var schema = {
        properties: {
          parametros: {
            description: 'Please enter the route',
          },
        }
}
function inicializaPrompt(){
  prompt.get(schema, function (err, result) {
      const parametros = result.parametros.split('-');
      const resultado = rotasAppService.calculaMelhorRota(parametros[0], parametros[1]);
      console.log(rotaResultDto.criarRotaResultDto(resultado));
      prompt.stop();
  });
  prompt.start();
  return prompt;
}
module.exports = {inicializaPrompt
};