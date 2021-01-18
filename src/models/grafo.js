class Grafo{}
class Vizinho{}
  function criarGrafo(no, vizinho, custo){
        let grafo = new Grafo()
        grafo.no = no;
        grafo.vizinho = [];
        grafo.vizinho.push(criarVizinho(vizinho,custo));
        return grafo;
  }
  function criarVizinho(nome, custo){
          let vizinho = new Vizinho();
          vizinho.nome = nome;
          vizinho.custo = custo;
          return vizinho;
  }
  function inicializarGrafos(){
          let grafos = []
          let grafo = new Grafo();
          grafo.no = null;
          grafo.vizinho = [];
          grafos.push(grafo);  
          return grafos
}
module.exports ={
        criarGrafo, criarVizinho, inicializarGrafos
}

