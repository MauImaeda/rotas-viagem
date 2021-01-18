const csv = require('csv-parser');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const fs = require('fs');
const Rota = require('../models/rota');
const StorageService = require('../services/storageService');
const { EventEmitter } = require('events');
let rotas = [];
const storage = new StorageService();
class ArquivoAppService extends EventEmitter {
  lerArquivoCsv(nomeArquivo) {
    const source = fs.createReadStream(nomeArquivo);
    source.on('error', (err) => {
      this.emit('error', err);
    });
    storage.on('error', (err) => {
      source.emit('error', err.message);
    })
    source.on('end', () => {
      source.close();
      this.emit('sucess', "Arquivo lido com sucesso");
    })
    source.pipe(csv(['origem', 'destino', 'custo']))
      .on('data', (row) => {
        storage.salvarRegistrosMemoria(row.origem, row.destino, row.custo)
      })
      .on('error', (err) => {
        this.emit('error', err);
      })
  }


  gravarArquivoCsv() {
    const nomeArquivo = storage.buscarNomeArquivo();
    const csvWriter = createCsvWriter({
      path: nomeArquivo,
      header: [
        'origem',
        'destino',
        'custo'
      ]
    });
    var rotas = storage.buscarListaRotas();
    csvWriter
      .writeRecords(rotas)
      .then(() =>{ 
      });
    
  }
}
module.exports = ArquivoAppService;