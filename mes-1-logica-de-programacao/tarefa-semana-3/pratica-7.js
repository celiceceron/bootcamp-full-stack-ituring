/*
Crie uma função que recebendo como argumento uma lista 
de depósitos e retiradas, exiba o saldo final da 
conta via console.log() dentro da função.
*/


const listaDeEntradasESaidas = [100, -20, -30, 10, -7, -21, -5];

const total = listaDeEntradasESaidas.reduce((acumulador, valorAtual) => {
    return acumulador + valorAtual}, 0);

console.log(`O saldo final de sua conta foi positivo no valor de R$ ${total}.`);


