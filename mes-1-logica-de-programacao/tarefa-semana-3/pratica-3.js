/*
Crie uma função que recebe como argumento um número 
inteiro maior que zero, retorne true se este número 
for primo e false se ele não for um número primo.


// NUMERO PRIMO TEM 2 DIVISORES/ NUMERO 1 E ELE MESMO.
const eHPrimo = (n) => {
    let i = 2;


    while (i <= n) {

       if (n % i === 0){
        console.log(i);
            return true;
       }
       i++;
    }

return false;
}

eHPrimo(17);
eHPrimo(2);
eHPrimo(7);
eHPrimo(8);
eHPrimo(5);
eHPrimo(23);
eHPrimo(15);
eHPrimo(1500450271);
*/