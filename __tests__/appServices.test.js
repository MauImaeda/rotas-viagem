const ArquivoAppService = require('../src/appServices/arquivoAppService');
const arquivoAppService = new ArquivoAppService();
const StorageMock = require('../src/mocks/storageMock')
const mock = new StorageMock();

const rotasAppService = require('../src/appServices/rotasAppServices');
describe('Testando camada de aplicação', () => {
  test('TesteLerArquivoDeveEmitirMensagemSucesso', () => {
    let mensagem;
    arquivoAppService.on('sucess', (msg) => {
      mensagem = msg;
      expect(mensagem).toBe('Arquivo lido com sucesso');
    })
    arquivoAppService.lerArquivoCsv('data.csv');
  });
  test('TesteLerArquivoCorrompidoDeveEmitirMensagemErro', () => {
    let mensagem = "";
    arquivoAppService.on('error', (err) => {
      mensagem = err;
      expect(mensagem).toBe('Falha na leitura');
    })
    arquivoAppService.lerArquivoCsv('error.csv');
  });

  test('TesteLerArquivoNaoEncotradoEmitirMensagemErro', () => {
    let mensagem = "";
    arquivoAppService.on('error', (err) => {
      mensagem = err;
      expect(mensagem).toBe('Falha na leitura');
    })
    arquivoAppService.lerArquivoCsv('error.csv');
  });

  test('TesteGravarArquivoSucesso', () => {
    let mensagem;
    mock.criarMockStorage();
    mock.salvarNomeArquivo('teste.csv')
    arquivoAppService.gravarArquivoCsv();
    arquivoAppService.on('sucess', (msg) => {
      mensagem = msg;
      expect(mensagem).toBe('Arquivo lido com sucesso');
    })

    arquivoAppService.lerArquivoCsv('test.csv');
  });

  test('TesteCalcularRotaDeveDevolverMelhorRota', () => {
    arquivoAppService.lerArquivoCsv('data.csv');
    arquivoAppService.on('sucess', (msg) => {
      const retorno = rotasAppService.calculaMelhorRota('GRU', 'CDG');
      expect(retorno.path).not.toBe(null);
    });
  });


  test('TesteCalcularRotaIncorretaNaoDeveDevolverRota', () => {
    arquivoAppService.lerArquivoCsv('data.csv');
    arquivoAppService.on('sucess', (msg) => {
      const retorno = rotasAppService.calculaMelhorRota('GRU', 'CHN');
      expect(retorno.path).toBe(null);
    });
  });

});
