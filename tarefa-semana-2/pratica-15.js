/*
 Crie uma função que recebendo o peso (em kg) 
 e altura (em metros) de uma pessoa como parâmetros, 
 retorne o IMC de acordo com o seguinte cálculo: 
 IMC = PESO / (ALTURA * ALTURA).
 */

 const calculoDoIMC = (peso, altura) => {
    const imc = (peso/(altura * altura));
    const imcFinal = Math.floor(imc);
        return imcFinal
 }

 console.log(calculoDoIMC(77, 1.72));