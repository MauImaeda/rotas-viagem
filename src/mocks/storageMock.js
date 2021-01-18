
const StorageService = require('../services/storageService');
const storage = new StorageService();

class StorageMock{
        criarMockStorage(){
                storage.salvarRegistrosMemoria('teste1', 'teste2', 2)
                storage.salvarRegistrosMemoria('teste2', 'teste3', 2)
                storage.salvarRegistrosMemoria('teste3', 'teste4', 2)
                storage.salvarRegistrosMemoria('teste5', 'teste5', 2)
        }
        salvarNomeArquivo(nome){
                storage.salvarNomeArquivo(nome);
        }
        limparRotas(){
                storage.limparRotas();
        }
}
module.exports = StorageMock;