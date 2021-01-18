const Graph = require('node-dijkstra')
const StorageService = require('../services/storageService');
const helper = require('../helpers/modelHelper');
const storage = new StorageService();

function calculaMelhorRota(origem, destino) {
        const parametros = helper.convertModelToGrafo(storage.buscarListaRotas());
        if (parametros) {
                const route = new Graph(parametros);
                return route.path(origem, destino, { cost: true });
        } else{
                return null;
        }

}
exports.calculaMelhorRota = calculaMelhorRota;