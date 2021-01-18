const Grafo = require('../models/grafo');
let graph = new Map();
function convertModelToGrafo(model){
        if(model){
                let grafos = [];
                model.forEach(x => {
                        let grafo = grafos.filter(y => y.no === x.origem)[0];
                        if(!grafo){
                                grafos.push(Grafo.criarGrafo(x.origem, x.destino, x.custo));
                        } else {
                                grafo.vizinho.push(Grafo.criarVizinho(x.destino, x.custo));
                        }
                });
                grafos.forEach(x => {
                        const m = new Map();
                        x.vizinho.forEach(y => {
                                m.set(y.nome, parseInt(y.custo))
                        });
                        graph.set(x.no, m);
                });
                return graph;
        } else {
                return null;
        }
}
exports.convertModelToGrafo = convertModelToGrafo;