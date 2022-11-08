/*
 Crie uma função que recebendo uma lista de 
 depósitos e retiradas, exiba um resumo completo 
 do extrato de sua conta.
 */

/*
    let exibeExtratoCompleto = lista => {
        let saldoFinal = 0;
        let totalDepositos = 0;
        let totalDeRetiradas = 0;
        let qtdDeRetiradas = 0;
        let qtdDeDepositos = 0;
    


        lista.forEach(function(item) {
            if(item.movimentacao === "deposito"){
                totalDepositos += item.valor
                qtdDeDepositos + qtdDeDepositos++
            }else {
                (item.movimentacao === "retirada")
                totalDeRetiradas -= item.valor
                qtdDeRetiradas + qtdDeRetiradas++
        }
    });
      
        saldoFinal = totalDepositos + totalDeRetiradas;


        let positivoOuNegativo = saldoFinal > 0 ? "positivo" : "negativo"

        console.log(`Total de depósitos: ${qtdDeDepositos}`)

        console.log(`Total de retiradas: ${qtdDeRetiradas}`)
    
        console.log(`O valor total depositado foi de: R$ ${totalDepositos}`)
      
        console.log(`O valor total retirado foi de: R$ ${totalDepositos - saldoFinal}`)
      
        console.log(`O saldo final de sua conta foi ${positivoOuNegativo} no valor de R$ ${saldoFinal}`)
    
       
      };
*/


let exibeExtratoCompleto = lista => {
  let contagensIniciais = {
    saldoFinal: 0,
    totalDeDepositos: 0,
    totalDeRetiradas: 0,
    qtdDeDepositos: 0,
    qtdDeRetiradas: 0
  }

  const contagemFinal = lista.reduce(function(acumulador, item){
    if(item.movimentacao === "deposito") {
      acumulador.totalDeDepositos += item.valor;
      acumulador.qtdDeDepositos++;
    } else if (item.movimentacao === "retirada") {
      acumulador.totalDeRetiradas += item.valor;
      acumulador.qtdDeRetiradas++;
    }
      return acumulador;
  },contagensIniciais);

  contagemFinal.saldoFinal = contagemFinal.totalDeDepositos +
  contagemFinal.totalDeRetiradas;

  let possitivoOuNegativo = contagemFinal.saldoFinal > 0 ? "positivo" :
  "negativo";

  console.log(`Total de depósitos: ${contagemFinal.qtdDeDepositos}`)

  console.log(`Total de retiradas: ${contagemFinal.qtdDeRetiradas}`)

  console.log(`O valor total depositado foi de: R$ ${contagemFinal.totalDeDepositos}`)

  console.log(`O valor total retirado foi de: R$ ${contagemFinal.totalDeRetiradas}`)

  console.log(`O saldo final de sua conta foi ${contagemFinal.possitivoOuNegativo} no valor de: R$ ${contagemFinal.totalDeDepositos - contagemFinal.totalDeRetiradas}`)

}
let l = [{
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
  }];


  exibeExtratoCompleto(l);

  /*
  //SOLUÇÃO 
let exibeExtratoCompleto = listaMovimentacoes => {
  let saldoFinal = 0;
  let depositos = 0;
  let retiradas = 0;
  let qtdDepositos = 0;
  let qtdRetiradas = 0;
  listaMovimentacoes.forEach(movimentacao => {
      const ehDeposito = movimentacao.movimentacao === "deposito";
      const ehRetirada = movimentacao.movimentacao === "retirada";
      qtdDepositos += ehDeposito ? 1 : 0;
      qtdRetiradas += ehRetirada ? 1 : 0;
      depositos += ehDeposito ? movimentacao.valor : 0;
      retiradas += ehRetirada ? movimentacao.valor : 0;
      saldoFinal += ehDeposito ? movimentacao.valor : 0;
      saldoFinal += ehRetirada ? -movimentacao.valor : 0;
  })
  const positivoOuNegativo = saldoFinal >= 0 ? "positivo" : "negativo";

  console.log(`Total de depósitos: ${qtdDepositos}`);
  console.log(`Total de retiradas: ${qtdRetiradas}`);
  console.log(`O valor total depositado foi de: R$ ${depositos}`);
  console.log(`O valor total retirado foi de: R$ ${retiradas}`);
  console.log(`O saldo final de sua conta foi ${positivoOuNegativo} no valor de R$ ${Math.abs(saldoFinal)}`);
}

//TESTANDO A SOLUÇÃO 
const listaMovimentacoes = [{
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
}];
exibeExtratoCompleto(listaMovimentacoes);
*/