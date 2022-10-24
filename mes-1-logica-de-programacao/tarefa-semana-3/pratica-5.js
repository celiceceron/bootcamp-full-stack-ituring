/*
Crie uma função que recebendo como argumento uma lista 
de seriados e o seriado que esteja querendo pesquisar, 
retorne a posição que se encontra o seriado. 
Caso não tenha encontrado o seriado, retorne undefined. 
*/


const encontraSeriados = (listaDeSeriados, termoDeBusca) => {
    let seriadosEncontrados = []; 
    let i = 0;

    while (i < listaDeSeriados.length) {
        if (listaDeSeriados[i].includes(termoDeBusca)){ 
            return [i]; 
        }
            i++; 

        } if (i != listaDeSeriados.length)
            return "undefined"
   
    }

        
    const listaDeSeriados = ["Breaking Bad", "Game of Thrones", "Stranger Things", "Chernobyl", "Dexter", "The Last Dance", "This is Us"];
    const termoDeBusca = "Dexter";
    /*const termoDeBusca = "Friends";*/

    console.log(encontraSeriados(listaDeSeriados, termoDeBusca));

