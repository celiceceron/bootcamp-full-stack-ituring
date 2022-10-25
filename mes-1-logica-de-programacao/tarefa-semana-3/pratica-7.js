/*
Crie uma função que recebendo como argumento uma lista 
de depósitos e retiradas, exiba o saldo final da 
conta via console.log() dentro da função.
*/

/*
const listaDeEntradasESaidas = [100, -20, -30, 10, -7, -21, -5];

const total = listaDeEntradasESaidas.reduce((acumulador, valorAtual) => {
    return acumulador + valorAtual}, 0);

console.log(`O saldo final de sua conta foi positivo no valor de R$ ${total}.`);

*/
let exibeSaldoFinal = lista => {
    let saldoFinal = 0
    for (item of lista)
        saldoFinal += item
    const positivoOuNegativo = saldoFinal > 0 ? "positivo" : "negativo"
    console.log(`O saldo final de sua conta foi ${positivoOuNegativo} no valor de R$ ${Math.abs(saldoFinal)}.`)
}

let listaDepositosRetiradas = [100, -20, -30, 10, -7, -21, -5]
exibeSaldoFinal(listaDepositosRetiradas)
listaDepositosRetiradas = [-100, -20, -30, 10, -7, -21, -5]
exibeSaldoFinal(listaDepositosRetiradas)

