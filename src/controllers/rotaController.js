const rotasAppService = require('../appServices/rotasAppServices');
const StorageService = require('../services/storageService');
const storage = new StorageService();
const ArquivoAppService = require('../appServices/arquivoAppService');
const arquivoAppService = new ArquivoAppService();
const RotaResulDto = require('../dtos/rotaResultDto');
const Rota = require('../models/rota');
exports.post = (req, res, next) => {

    if (!req.body.origem || !req.body.destino || !req.body.custo) {
        res.status(400).send('Parâmetros origem, destino e custo são obrigatórios');
    } else {
        if (isNaN(parseInt(req.body.custo))) {
            res.status(400).send('Custo deve ser um numero');
        } else {
            const origem = req.body.origem;
            const destino = req.body.destino;
            const custo = req.body.custo;
            storage.salvarRegistrosMemoria(origem, destino, custo)
            arquivoAppService.gravarArquivoCsv()
            res.status(200).send('Nova rota adicionada no arquivo');
        }
    }
};
exports.get = (req, res, next) => {
    if (!req.query.origem || !req.query.destino) {
        res.status(400).send('Parâmetros origem e destino são obrigatórios');
    } else {
        const origem = req.query.origem;
        const destino = req.query.destino;
        const resultado = rotasAppService.calculaMelhorRota(origem, destino);
        if (resultado == null) {
            res.status(500).send('Erro inesperado');
        }
        if (resultado.path) {
            res.status(200).send(RotaResulDto.criarRotaResultDto(resultado));
        }
        else {
            res.status(404).send('Rota não encontrada');
        }
    }
};