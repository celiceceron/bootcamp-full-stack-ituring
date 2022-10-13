/*criar uma função que retorna um número aleatório 
entre 0 e 10000
*/


function numeroAleatorio(){
    const min = 0;
    const max = 10000;
    const numero = Math.random()*(max - min) + min;
    const numeroInteiro = Math.floor(numero);

    return numeroInteiro;
}

console.log(numeroAleatorio());