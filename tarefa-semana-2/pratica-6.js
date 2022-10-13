/*
-->FUNCAO DECLARADA:
function soma2numeros(a, b) {
  return a+b;
}
console.log(soma2numeros(1, 1))

-->FUNCAO COM EXPRESSAO:
let soma2numeros = function(a, b) {
  return a+b;
}
console.log(soma2numeros(1, 1))

--> EXPRESSAO COM ARROW:
let soma2numeros = (a, b) => {
  return a+b;
}
console.log(soma2numeros(1, 1)) 

--> RETORNO_EXEMPLIS:
let soma2numeros = (a, b) => a+b;
___
let soma2numeros = (a, b) => {
  return a+b;
}
___
O retorno só acontecerá implicitamente 
se você deixar sem chaves!

let soma2numeros = (a, b) => { a+b };
___
Ele não terá o return embutido. Além disso, 
se a sua função só tem um único parâmetro, 
você pode também remover os parênteses.

let potenciação = a => a*a;

let potenciação = (a) => a*a;

let potenciação = (a) => {
  return a*a;
}

function potenciação(a) {
  return a*a;
}
*/



  
let descontoNoProduto = (valor, desconto) => {
    const valorFinal = valor* (1 - desconto/100);
    return valorFinal.toFixed(2);

}
const valorComDesconto = descontoNoProduto (250,30);

console.log(valorComDesconto);