/*
Crie uma função que receba apenas um 
número inteiro maior que zero.
Exiba no console todos os números ímpares até chegar 
nesse número.
*/

/*
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

exibaNumerosImpares(17)
*/

//EX2: ITURING

let imparesDe1AteN = n => {
    for (let i = 1; i <= n; i += 2)
        console.log(i)
}

imparesDe1AteN(16)
