/*
Escreva uma função que, dado uma lista de números, retorne a lista 
em ordem crescente de valor.
*/


let lista = [4, 9, 7, 1, 8, 12];

function ordenandoALista (lista) {
    let novaLista = lista.sort(function(a, b){
        if(a < b)
            return -1 
         else if (a < b)
            return 1 
         else
            return 0
});
    return novaLista
}
console.log(ordenandoALista(lista));
/*
//SOLUÇÃO 1 (Mais difícil a leitura e entendimento) 
let ordenaCrescenteS1 = lista => {
    return lista.sort((valorAnterior, valorAtual) => {
        return valorAnterior - valorAtual;
    });
};

//SOLUÇÃO 2 (Igual a anterior, mas super enxuta) 
let ordenaCrescenteS2 = lista => lista.sort((a, b) => a - b);

//SOLUÇÃO 3 (Melhor leitura) 
let ordenaCrescenteS3 = lista => {
    return lista.sort((valorAnterior, valorAtual) => {
        if (valorAnterior < valorAtual)
            return -1;
        if (valorAnterior > valorAtual)
            return 1;
        return 0;
    });
};

//TESTANDO AS SOLUÇÕES 
let listaNumeros = [4, 9, 7, 1, 8, 12];
console.log(ordenaCrescenteS1(listaNumeros));
listaNumeros = [4, 9, 7, 1, 8, 12];
console.log(ordenaCrescenteS2(listaNumeros));
listaNumeros = [4, 9, 7, 1, 8, 12];
console.log(ordenaCrescenteS3(listaNumeros));
*/