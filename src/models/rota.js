class Rota {}
function criarRota(origem, destino, custo){
         let rota = new Rota();
         rota.custo = custo;
         rota.destino = destino;
         rota.origem = origem;
        return rota
 }
module.exports = {Rota, criarRota};