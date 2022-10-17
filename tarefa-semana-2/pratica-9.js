/*
Função recebe dois parâmetros (dois números) e o valor 
exibido na tela deverá ser o de maior valor. 
Por exemplo, passando 10 e 20 como parâmetros, 
o número 20 deverá ser o resultado obtido. 
Já passando 2 números iguais, você pode exibir
qualquer um dos números.
*/


function maiorNumero (num1, num2){
    if(num1 < num2){
        console.log(num2);
    } else{
        console.log(num1||num2);
    }
}

console.log(maiorNumero(10, 10));
