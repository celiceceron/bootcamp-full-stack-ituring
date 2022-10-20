/*
Crie uma função que receba apenas um 
número inteiro maior que zero.
Exiba no console todos os números ímpares até chegar 
nesse número.
*/

const exibaNumerosImpares = (n) => {
    let i = 1;

    if (n < 0){
        console.log("Valor inválido");
        return undefined;
    }

   while (i <= n) {
        console.log(i);
        i = i + 2;
   
   }
}

exibaNumerosImpares(19)
