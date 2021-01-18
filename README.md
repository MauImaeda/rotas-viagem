# rotas-viagem

### Primeiros passos
  1. Instale as bibliotecas intilizadas no programa 
  `npm install` ou `yarn install`
  2. Executar a aplicação
  `node ./src/server.js <nome-do-arquivo.csv>`
  
### A aplicação
  A aplicação ao ser executada permite ao usuário fazer dois tipos de utilização
  - Por meio do CLI
    - O usuário pode realizar a consulta do melhor caminho do ponto A até ponto B
  - Por meio da API
    - O usuário pode realizar a consulta do melhor caminho do ponto A até ponto B
    - O usuário pode cadastrar uma rota 
  
### Como usar
  - Modo CLI
    Para utilizar a aplicação no modo CLI, basta informar a rota desejada no formato `origem-destino`
    
  - Modo API
    Para utilizar a aplicação no modo API
    1. Para realizar a busca
      Realizar uma chamada GET para o endereço `http://localhost:8080/api/buscar-rota` informando em formato query string dois parâmetros obrigatórios "origem" e "destino"
    2. Para realizar o cadastramento de uma nova rota
      Realizar uma chamada POST para o endereço `http://localhost:8080/api/adicionar-rota` informando no corpo da requisição 3 campos obrigatórios: "origem", "destino" e "custo"
      
