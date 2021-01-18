const controller = require('../src/controllers/rotaController');
const request = require('supertest');
const StorageMock = require('../src/mocks/storageMock')
const mock = new StorageMock();
const app = require('../src/app');
const { Rota } = require('../src/models/rota');
describe('Testando camada de controle', () => {
        mock.criarMockStorage();
        mock.salvarNomeArquivo('teste.csv');
        it('TesteGetDeveRetornar200', async () => {
                await request(app)
                        .get('/api/buscar-rota')
                        .query({
                                origem: "teste1",
                                destino: "teste2"
                        })
                        .then((res) =>{
                                expect(res.statusCode).toEqual(200)
                        })
        });
        it('TesteGetDeveRetornar404', async () => {
                await request(app)
                        .get('/api/buscar-rota')
                        .query({
                                origem: "teste1",
                                destino: "teste5"
                        })
                        .then((res) =>{
                                expect(res.statusCode).toEqual(404)
                        })
        });
        it('TesteGetSemDestinoDeveRetornar400', async () => {
                await request(app)
                        .get('/api/buscar-rota')
                        .query({
                                origem: "teste1",
                        })
                        .then((res) =>{
                                expect(res.statusCode).toEqual(400)
                        })
        });
        it('TesteGetOrigemDestinoDeveRetornar400', async () => {
                await request(app)
                        .get('/api/buscar-rota')
                        .query({
                                destino: "teste5"
                        })
                        .then((res) =>{
                                expect(res.statusCode).toEqual(400)
                        })
        });
        it('TestePostDeveRetornar200', async () => {
                await request(app)
                        .post('/api/adicionar-rota')
                        .send({
                                origem: 'teste4',
                                destino: "teste5",
                                custo: 4
                        })
                        .then((res) =>{
                                expect(res.statusCode).toEqual(200)
                        });
                
        });
        it('TestePostSemDestinoDeveRetornar400', async () => {
                await request(app)
                        .post('/api/adicionar-rota')
                        .send({
                                origem: 'teste4',
                                custo: 4
                        })
                        .then((res) =>{
                                expect(res.statusCode).toEqual(400)
                        });
                
        });
        it('TestePostSemOrigemDeveRetornar400', async () => {
                await request(app)
                        .post('/api/adicionar-rota')
                        .send({
                                destino: "teste5",
                                custo: 4
                        })
                        .then((res) =>{
                                expect(res.statusCode).toEqual(400)
                        });
                
        });
        it('TestePostSemCustoDeveRetornar400', async () => {
                await request(app)
                        .post('/api/adicionar-rota')
                        .send({
                                origem: 'teste4',
                                destino: "teste5"
                        })
                        .then((res) =>{
                                expect(res.statusCode).toEqual(400)
                        });
                
        });
        it('TestePostCustoNaoNumerakDeveRetornar400', async () => {
                await request(app)
                        .post('/api/adicionar-rota')
                        .send({
                                origem: 'teste4',
                                destino: "teste5",
                                custo: 'teste'
                        })
                        .then((res) =>{
                                expect(res.statusCode).toEqual(400)
                        });
                
        });
        it('TesteGetErroDeveRetornar500', async () => {
                mock.limparRotas();
                await request(app)
                        .get('/api/buscar-rota')
                        .query({
                                origem: "teste1",
                                destino: "teste2"
                        })
                        .then((res) =>{
                                expect(res.statusCode).toEqual(500)
                        })
        });
        it('TestePostErroJsonDeveRetornar400', async () => {
                mock.limparRotas();
                await request(app)
                        .post('/api/adicionar-rota')
                        .send('{"origem":}')
                        .then((res) =>{
                                expect(res.statusCode).toEqual(400)
                        })
        });


        

})