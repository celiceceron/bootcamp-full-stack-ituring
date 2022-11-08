/*
Crie uma função que recebe um objeto com a lista 
de avaliações de um restaurante, calcula a média 
de suas avaliações de acordo com a entrada de cada 
cliente e exibe a média de avaliação.
*/

let estabelecimento = {
    restaurante: "Turing Gourmet",
    tipo: "Comida britânica",
    avaliacoes: [
      {
        cliente: "Thais S.",
        nota: 9.8
      },
      {
        cliente: "Thales Gonçalves",
        nota: 8.9
      },
      {
        cliente: "José Lopes",
        nota: 9.9
      },
      {
        cliente: "Cristina Souza",
        nota: 9.3
      },
      {
        cliente: "Leo Garcia",
        nota: 8.5
      }
    ]
  }

  let mediaNota = function(estabelecimento) {
    let soma = 0;
    let i = 0;

    estabelecimento.avaliacoes.forEach(function(item){
        soma += item.nota;
        i++;
    })

    media = soma / i;
    console.log(`A média de avaliações do restaurante Turing Gourmet foi de `) 
    console.log(media.toFixed(2));


  }

 mediaNota(estabelecimento);
  /*
  //SOLUÇÃO 1 
let exibeMediaAvaliacoesS1 = dadosRestaurante => {
  let somaAvaliacoes = 0;
  dadosRestaurante.avaliacoes.forEach((avaliacao) => {
      somaAvaliacoes += avaliacao.nota;
  });
  const mediaAvaliacoes = somaAvaliacoes/dadosRestaurante.avaliacoes.length;
  
  console.log(`A média de avaliações do restaurante ${dadosRestaurante.restaurante} foi de ${mediaAvaliacoes.toFixed(2)}.`);
}

//SOLUÇÃO 2 (Usando o método .reduce())
O método .reduce() pega uma lista e reduz ela em um único valor. A função de callback desse método tem como 1º parâmetro o acumulador e o segundo parâmetro o valorAtual da lista. Além da função de callback, o método .reduce() também possui como parâmetro o valor inicial que você deseja colocar na variável acumuladora

let exibeMediaAvaliacoesS2 = dadosRestaurante => {
  const valorInicial = 0;
  const funcaoRedutora = (acumulador, avaliacaoAtual) => acumulador += avaliacaoAtual.nota;
  const somaAvaliacoes = dadosRestaurante.avaliacoes.reduce(funcaoRedutora, valorInicial);
  const mediaAvaliacoes = somaAvaliacoes/dadosRestaurante.avaliacoes.length;
  
  console.log(`A média de avaliações do restaurante ${dadosRestaurante.restaurante} foi de ${mediaAvaliacoes.toFixed(2)}.`);
}

//TESTANDO AS SOLUÇÕES 
const dadosRestaurante = {
  restaurante: "Turing Gourmet",
  tipo: "Comida britânica",
  avaliacoes: [
    {
      cliente: "Thais S.",
      nota: 9.8
    },
    {
      cliente: "Thales Gonçalves",
      nota: 8.9
    },
    {
      cliente: "José Lopes",
      nota: 9.9
    },
    {
      cliente: "Cristina Souza",
      nota: 9.3
    },
    {
      cliente: "Leo Garcia",
      nota: 8.5
    }
  ]
};
exibeMediaAvaliacoesS1(dadosRestaurante);
exibeMediaAvaliacoesS2(dadosRestaurante);
*/