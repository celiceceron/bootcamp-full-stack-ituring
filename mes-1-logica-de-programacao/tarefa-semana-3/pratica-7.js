/*
Crie uma função que recebendo como argumento uma lista 
de depósitos e retiradas, exiba o saldo final da 
conta via console.log() dentro da função.
*/


function somarTudo(listaDeEntradasESaidas) {
let i = 0;
let soma = [];

    for(let i = 0; i < listaDeEntradasESaidas.length; i++) {
    soma = soma + listaDeEntradasESaidas[i]
        console.log(`O saldo final de sua conta foi positivo no valor de R$ ${soma}`)
        return soma;
    }

}
    
const listaDeEntradasESaidas = [100, -20, -30, 10, -7, -21, -5];
somarTudo(listaDeEntradasESaidas);