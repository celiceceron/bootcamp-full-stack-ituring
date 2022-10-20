/*
Crie uma função que receba apenas 1 
argumento de entrada: o número que você 
utilizará para fazer a tabuada.
*/

const tabuada = (num) => {
    let i = 1;

    while (i <= 10){
        
        console.log(`${num} x ${i} = ${num * i}`);
        i++;
    }
}
// INCLUIR O TEXTO TABUADA DE 7 ANTES
tabuada(7);