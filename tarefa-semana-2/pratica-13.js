/*
Crie uma função que receba 2 números.
Utilize o operador ternário para retornar o
menor valor entre os 2 números.
*/

const doisNumeros = (num1, num2) => {
    let menor = num1 < num2 ? num1 : num2;
        return menor
}

console.log(doisNumeros(20,10));

