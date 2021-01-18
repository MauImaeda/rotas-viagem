const Graph = require('node-dijkstra')
const StorageService = require('../services/storageService');
const helper = require('../helpers/modelHelper');
const storage = new StorageService();

function calculaMelhorRota(origem, destino){
        const parametros = helper.convertModelToGrafo(storage.buscarListaRotas());
        const route = new Graph(parametros);
        return route.path(origem, destino, { cost: true });
        
}
exports.calculaMelhorRota = calculaMelhorRota;