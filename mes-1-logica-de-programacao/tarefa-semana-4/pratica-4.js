/*
Crie uma função que recebendo uma lista com valores do tipo number, 
retorne uma lista com a raiz quadrada de cada um dos elementos. 
*/


let lista = [4, 9, 16, 25, 36, 49];

let raizQuadradaDaLista = lista.map(function(item){
    for (let i = 0; i < lista.length; i++){
    }
    return Math.sqrt(item);
});

console.log(raizQuadradaDaLista);

