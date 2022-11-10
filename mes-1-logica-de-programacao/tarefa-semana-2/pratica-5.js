/* Criar uma expressão de função JavaScript, usando mesmo
exemplo ca pratica-4.
*/

let exp = function(valor,desconto){
    const valorFinal = valor* (1 - desconto/100);
    return valorFinal.toFixed(2);

}
const valorComDesconto = exp(250,30);
console.log(valorComDesconto);