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