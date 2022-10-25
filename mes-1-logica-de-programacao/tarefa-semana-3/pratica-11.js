/*
Crie uma função que recebe como argumento uma lista 
de números que representam a contagem de visualizações 
de vídeos de um canal no Youtube. Retorne a lista com os 
números ordem crescente. Tente escrever um algoritmo de ordenação 
para resolver este problema. 
*/

/*
const listaDeNumeros = [10, 45, 123, 18, 56, 45, 32, 98, 121, 232, 1392824];

const ordemCrescente = listaDeNumeros.sort (function(a, b){
    return a - b;
});

console.log(ordemCrescente);
*/


let ordenaListaDeNumeros = lista => {
    for (let i = 0; i < lista.length; i++) {
        let indiceMenorAtual = i

        for (let j = i+1; j < lista.length; j++)
            if (lista[j] < lista[indiceMenorAtual]) {
                indiceMenorAtual = j
            }

        // trocando os valores
        const aux = lista[i]
        lista[i] = lista[indiceMenorAtual]
        lista[indiceMenorAtual] = aux
    }

    return lista
}

let lista = [10, 45, 123, 18, 56, 45, 32, 98, 121, 232, 1392824]
console.log(ordenaListaDeNumeros(lista))
