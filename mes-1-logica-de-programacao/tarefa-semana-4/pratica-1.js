/*
Crie uma função que recebendo como argumento uma lista 
de seriados qualquer, exiba na tela cada um dos seriados 
com o índice de cada um na lista. 
*/


let lista = ["Breaking Bad", "Game of Thrones", "Stranger Things", "Chernobyl", "Dexter", "The Last Dance", "This is Us"];

lista.forEach(function(item, indice){
    console.table(`[${indice}] ${item}`)
    
})

   


