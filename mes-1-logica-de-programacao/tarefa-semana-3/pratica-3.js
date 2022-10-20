/*
Crie uma função que recebe como argumento um número 
inteiro maior que zero, retorne true se este número 
for primo e false se ele não for um número primo.
*/

// NUMERO PRIMO TEM 2 DIVISORES/ NUMERO 1 E ELE MESMO.
const eHPrimo = (n) => {
    let i = 1

    if (n % i === 0){
        return "True"
    }
        return "False"

    while (i <= n) {
        console.log(i);
         i++
    }
}


eHPrimo(17);
eHPrimo(2);
eHPrimo(7);
eHPrimo(8);
eHPrimo(5);
eHPrimo(23);
eHPrimo(15);
eHPrimo(1500450271);