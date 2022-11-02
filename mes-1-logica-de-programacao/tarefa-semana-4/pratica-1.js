/*
Crie uma função que recebendo como argumento uma lista 
de seriados qualquer, exiba na tela cada um dos seriados 
com o índice de cada um na lista. 
*/


function ordenaLista(lista) {
    lista.forEach((item, indice) => {
            console.table(`[${indice}] ${[item]}`);
})

}

let lista = ["Breaking Bad", "Game of Thrones", "Stranger Things", "Chernobyl", "Dexter", "The Last Dance", "This is Us"];
ordenaLista(lista);