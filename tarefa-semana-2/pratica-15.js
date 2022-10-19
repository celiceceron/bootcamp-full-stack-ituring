/*
 Crie uma função que recebendo o peso (em kg) 
 e altura (em metros) de uma pessoa como parâmetros, 
 retorne o IMC de acordo com o seguinte cálculo: 
 IMC = PESO / (ALTURA * ALTURA).
 */

 const calculoImc = (peso, altura) => peso / (altura * altura);

 function classificacaoImc (imc) {
    if (imc < 18.5)
        return "Abaixo do Peso"
    if (imc < 25)
        return "Peso Normal"
    if (imc < 30)
        return "Sobrepeso"
    
        return "Obesidade"
 }
 
 function checagemImc (peso, altura) {
    const imc = calculoImc (peso, altura);
    console.log(classificacaoImc(imc));
 }
    

checagemImc(30, 1.7);
