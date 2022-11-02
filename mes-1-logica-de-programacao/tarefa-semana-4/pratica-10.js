/*
Crie uma função que recebendo como argumento 
uma lista de objetos com depósitos e retiradas 
e exiba o saldo final da conta.
*/

const saldoFinal = (listaDeInformacoes) => {
        let resultadoFinal = 0;
        lista.forEach(function(item) {
            if(item.movimentacao === "deposito")
                resultadoFinal += item.valor;
            else if (item.movimentacao === "retirada")
                resultadoFinal -= item.valor;
        });
        
        let positivoOuNegativo = "negativo"
            if(resultadoFinal >= 0)
                positivoOuNegativo = "positivo"

    console.log(`O saldo final de sua conta foi ${positivoOuNegativo} no valor de R$ ${resultadoFinal}.`);

}

let lista = [{
    valor: 100.00,
    movimentacao: "deposito",
    dataMovimentacao: "2021-08-02T07:46:36.611Z"
  },
  {
    valor: 20.00,
    movimentacao: "retirada",
    dataMovimentacao: "2021-09-17T09:46:36.611Z"
  },
  {
    valor: 30.00,
    movimentacao: "retirada",
    dataMovimentacao: "2022-02-24T09:46:36.611Z"
  },
  {
    valor: 10.00,
    movimentacao: "deposito",
    dataMovimentacao: "2022-03-02T09:46:36.611Z"
  },
  {
    valor: 7.00,
    movimentacao: "retirada",
    dataMovimentacao: "2022-04-20T09:46:36.611Z"
  },
  {
    valor: 21.00,
    movimentacao: "retirada",
    dataMovimentacao: "2022-03-20T09:46:36.611Z"
  },
  {
    valor: 5.00,
    movimentacao: "retirada",
    dataMovimentacao: "2022-06-08T09:46:36.611Z"
  }]

  saldoFinal();