const Rota = require('../models/rota')
let listaRotas = [];
let nomeArquivo = "";
const { EventEmitter } = require('events')

class StorageService extends EventEmitter {
        buscarListaRotas() {
                return listaRotas;
        }
        adicionarRota(rota) {
                listaRotas.push(rota);
        }
        salvarNomeArquivo(nome) {
                nomeArquivo = nome;
        }
        buscarNomeArquivo() {
                return nomeArquivo;
        }
        salvarRegistrosMemoria(origem, destino, custo) {
                if (origem && destino && custo) {
                        var rota = Rota.criarRota(origem, destino, custo);
                        this.adicionarRota(rota);
                } else {
                        this.emit('error', new Error('Falha na leitura'))
                }
        }
        limparRotas(){
                listaRotas = [];
        }
}
module.exports = StorageService;
