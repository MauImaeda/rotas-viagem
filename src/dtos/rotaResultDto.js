class RotaResulDto{}

function criarRotaResultDto(resultado){
        let retorno = new RotaResulDto();
        return tratarRetorno(resultado);
}
function tratarRetorno(resultado){
        let texto = '';
        if(resultado.path){
        texto = 'O melhor caminho: '
        resultado.path.forEach((x,i) => {
                texto += i !== resultado.path.length - 1 ? `${x} - ` : `${x} `;
        });
        texto += `> $${resultado.cost}`
        } else{
           texto = 'Rota não encontrada';     
        }
        return texto;
}
module.exports = {
        criarRotaResultDto
}