/*
Crie uma função que recebendo uma lista com valores do tipo number, 
retorne uma lista com a raiz quadrada de cada um dos elementos. 
*/


let lista = [4, 9, 16, 25, 36, 49];

function calculoRaizQuadradaDaLista(lista) {
    let raizQuadradaDaLista = lista.map(function(item){
        return Math.sqrt(item);
});
    return raizQuadradaDaLista;
}

console.log(calculoRaizQuadradaDaLista(lista));

/*
//SOLUÇÃO 1 
let geradorRaizQuadradaS1 = lista => {
    return lista.map(Math.sqrt);
};

//SOLUÇÃO 2 (Resolvendo o desafio) 
let geradorRaizQuadradaS2 = lista => lista.map(Math.sqrt);

///TESTANDO AS SOLUÇÕES
const listaNumeros = [4, 9, 16, 25, 36, 49];
console.log(geradorRaizQuadradaS1(listaNumeros));
console.log(geradorRaizQuadradaS2(listaNumeros));
*/