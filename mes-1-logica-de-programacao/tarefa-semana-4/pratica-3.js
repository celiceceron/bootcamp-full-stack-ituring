/*
Crie uma função que recebendo como argumento
uma lista de seriados e um termo de pesquisa, 
retorne uma lista com todos os seriados que possuem aquele termo. 
*/


let lista = ["Breaking Bad", "Game of Thrones", "Stranger Things", "Chernobyl", "Dexter", "The Last Dance", "This is Us"];
let termoDeBusca = "Th";
let listaFiltrada = lista.filter(function(item){
    return item.includes(termoDeBusca)
})
console.log(listaFiltrada);

