/*
Crie uma função que recebendo como argumento
uma lista de seriados e um termo de pesquisa, 
retorne uma lista com todos os seriados que possuem aquele termo. 
*/


function buscarSerie(lista, termoDeBusca) {

   let encontraSerie = lista.filter(function(item) {
        return item.includes(termoDeBusca)
})
        return encontraSerie
}

let lista = ["Breaking Bad", "Game of Thrones", "Stranger Things", "Chernobyl", "Dexter", "The Last Dance", "This is Us"];
let termoDeBusca = "Th";

console.log(buscarSerie(lista, termoDeBusca));
/*
let filtraLista = (lista, valor) => {
    return lista.filter(valorAtual => valorAtual.includes(valor));
};

const listaSeriados = ["Breaking Bad", "Game of Thrones", "Stranger Things", "Chernobyl", "Dexter", "The Last Dance", "This is Us"];
console.log(filtraLista(listaSeriados, "Th"));
console.log(filtraLista(listaSeriados, "xasd"));
*/