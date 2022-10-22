/*
Crie uma função que recebendo como argumento
uma lista de seriados e um termo de pesquisa, 
retorne uma lista com todos os seriados que possuem aquele termo. 
*/

const encontraSeriados = (listaDeSeriados, termoDeBusca) => {
    let seriadosEncontrados = []; // LISTA  VAZIA QUE SERÁ PREENCHIDA COM OS SERIADOS ENCONTRADOS COM O TERMO DE BUSCA
    let i = 0;

    while (i < listaDeSeriados.length) {
        if (listaDeSeriados[i].includes(termoDeBusca)){ // INCLUDES PROCURA O TERMO DE BUSCA
            seriadosEncontrados.push(listaDeSeriados[i]) // PUSH INCLUI NA LISTA VAZIA OS SERIADOS ENCONTRADOS COM O TERMO DE BUSCA
        
        }
            i++; // CONTADOR SEMPRE ANTES DE FECHAR O WHILE
        }
        return seriadosEncontrados; // RETORNA SEMPRE QDO FECHA O WHILE COM OS SERIADOS ENCONTRADOS
    }

    const listaDeSeriados = ["Breaking Bad", "Game of Thrones", "Stranger Things", "Chernobyl", "Dexter", "The Last Dance", "This is Us"];
    const termoDeBusca = "Th";

    console.log(encontraSeriados(listaDeSeriados, termoDeBusca));


// EX2:
/*
const encontraItens = (listaDeCompras, termoDeBusca) => {
    let itensEncontradosNaLista = [];
    let i = 0;

    while(i < listaDeCompras.length){
        if(listaDeCompras[i].includes(termoDeBusca)){
            itensEncontradosNaLista.push(listaDeCompras[i])
        }
        i++;
    }
        return itensEncontradosNaLista;
}

const listaDeCompras = ["ovos", "leite", "macarrao", "carne", "carvao", "cadeira"];
const termoDeBusca = "ca";

console.log(encontraItens(listaDeCompras, termoDeBusca));
*/