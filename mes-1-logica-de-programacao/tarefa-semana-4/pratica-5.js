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
