/*
Crie uma função que recebendo como argumento uma lista 
de seriados e o seriado que esteja querendo pesquisar, 
retorne a posição que se encontra o seriado. 
Caso não tenha encontrado o seriado, retorne undefined. 
*/

function encontraSerie(series, termodebusca) {
    let indice = undefined
    series.forEach((item, i) => {
        if(item === termodebusca){
            indice = i
        }
    });
        console.log([indice]);
}
    

let listaSeries = ["Breaking Bad", "Game of Thrones", "Stranger Things", "Chernobyl", "Dexter", "The Last Dance", "This is Us"]
encontraSerie(listaSeries, "Dexter")
encontraSerie(listaSeries, "Friends")
