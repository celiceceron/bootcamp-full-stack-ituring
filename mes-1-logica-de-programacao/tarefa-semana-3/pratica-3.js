/*
Crie uma função que recebe como argumento um número 
inteiro maior que zero, retorne true se este número 
for primo e false se ele não for um número primo.
*/

/*
// NUMERO PRIMO TEM 2 DIVISORES/ NUMERO 1 E ELE MESMO.
function numeroPrimo (n) {

    for (let i = 2; i < n; i++) {
        if(n % i === 0){
            return false;
            break;
        }
    }
        return true;
}

console.log(numeroPrimo(17));
console.log(numeroPrimo(2));
console.log(numeroPrimo(7));
console.log(numeroPrimo(8));
console.log(numeroPrimo(5));
console.log(numeroPrimo(23));
console.log(numeroPrimo(15));
console.log(numeroPrimo(1500450271));
*/

// TENTATIVA 2:

function numeroPrimo (n) {
    let i = 2;

    while (i < n) {
        if(n % i === 0) {
            return false;
        }
        i++;
    }
        return true;
}

console.log(numeroPrimo(17));
console.log(numeroPrimo(2));
console.log(numeroPrimo(7));
console.log(numeroPrimo(8));
console.log(numeroPrimo(5));
console.log(numeroPrimo(23));
console.log(numeroPrimo(15));
console.log(numeroPrimo(1500450271));

