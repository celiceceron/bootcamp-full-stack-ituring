/*
Crie uma função que recebendo como argumento uma lista 
de seriados qualquer, exiba na tela cada um dos seriados 
com o índice de cada um na lista. 
*/


function ordenaLista(lista) {

    lista.forEach((item, indice) => {
        for(let i = 0; i < lista.length; i++){
            console.table(`[${indice}] ${[item]}`);

        return ordenaLista[i];
}

});

}

let lista = ["Breaking Bad", "Game of Thrones", "Stranger Things", "Chernobyl", "Dexter", "The Last Dance", "This is Us"];
ordenaLista(lista);