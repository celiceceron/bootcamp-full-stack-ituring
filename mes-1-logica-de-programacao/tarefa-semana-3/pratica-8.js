/*
Crie uma função que recebendo uma lista de depósitos 
e retiradas, exiba o resumo do extrato mensal de sua 
conta com as seguintes informações no exemplo abaixo. 
Para exibir, utilize o console.log() dentro da função.
*/

const listaDeEntradasESaidas = [100, -20, -30, 10, -7, -21, -5];
const valoresDeentrada = [[0], [3]];
const valoresDeSaida = [[1], [2], [4], [5], [6]];
const saldoFinal = (valoresDeentrada + valoresDeSaida);


const total = listaDeEntradasESaidas.reduce((acumulador, valorAtual) => {
    return acumulador + valorAtual}, 0);

console.log(`O saldo final de sua conta foi positivo no valor de R$ ${total}.`);
