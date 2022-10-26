/*
Crie uma função que recebe como argumento uma lista 
de números que representam a contagem de visualizações 
de vídeos de um canal no Youtube. Retorne a lista com os 
números ordem crescente. Tente escrever um algoritmo de ordenação 
para resolver este problema. 
*/

// NÃO CRIEI MÉTODO, USEI O SORT.


const listaDeNumeros = [10, 45, 123, 18, 56, 45, 32, 98, 121, 232, 1392824];

const ordemCrescente = listaDeNumeros.sort (function(a, b){
    return a - b;
});

console.table(ordemCrescente);
