/*
Função recebe um número como parâmetro e deverá, 
a partir do valor de entrada, verificar e retornar 
se o número é ímpar ou par.
*/

const parOuImpar = (numero) => {
    
    if (numero % 2 === 0){
        console.log(`O número ${numero} é par!`);
    } else {
        console.log(`O número ${numero} é ímpar!`);
    }
}

console.log(parOuImpar(4));
console.log(parOuImpar(5));
console.log(parOuImpar(10));
console.log(parOuImpar(15));
console.log(parOuImpar(20));