const app = require('./app');
const StorageService = require('./services/storageService');
const ArquivoAppService = require('./appServices/arquivoAppService');
const cli = require('./cli/commandLine');
const arquivo = new ArquivoAppService();
const storage = new StorageService();
arquivo.on('error', (err) => {
        process.exit(1)
});
arquivo.on('sucess', (mgs) => {
        app.listen(8080, function () {
        });
        cli.inicializaPrompt();
})
if (process.argv[2]) {
        storage.salvarNomeArquivo(process.argv[2]);
        arquivo.lerArquivoCsv(process.argv[2])
} else{
        process.exit(1);
}

