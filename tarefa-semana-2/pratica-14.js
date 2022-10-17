/*
Criar uma função que recebendo o peso (em kg) 
e altura (em metros) de uma pessoa como parâmetros, 
retorne a classificação do IMC de acordo 
com o seguinte cálculo: IMC = PESO / (ALTURA * ALTURA).
*/

const enquandramento = (peso, altura) => {
    const imc = (peso/(altura * altura));

    if (imc < 18.5){
        console.log(`"Abaixo do Peso" -> IMC abaixo de 18.5`);
    } else if (imc == 18.5 && imc <= 25) {
        console.log (`"Peso Normal" -> IMC entre 18.5 e 25`);
    } else if (imc == 25 && imc < 30){
        console.log (`"Sobrepeso" -> IMC entre 25 e 30`);
    } else {
        console.log (`"Obesidade" -> IMC maior que 30`);
    }

}
console.log(enquandramento(90, 1.70));
