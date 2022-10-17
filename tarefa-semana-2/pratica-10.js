/*
Função recebe três parâmetros (três números) e o valor 
exibido na tela deverá ser o de maior valor. 
Por exemplo, passando 30, 10 e 20 como parâmetros, 
o número 30 deverá ser o resultado obtido. 
Já passando 3 números iguais, você pode exibir
qualquer um dos números.
*/

const maiorNumero = (num1, num2, num3) => {
    if(num1 > num2, num3){
        console.log(num1);
    } else{
        console.log(num1||num2||num3);
    }
}

console.log(maiorNumero(30, 30, 30));