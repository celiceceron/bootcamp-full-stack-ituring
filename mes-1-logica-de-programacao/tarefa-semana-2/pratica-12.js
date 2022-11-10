/*
Crie uma função que receba um número de 1 a 7.
Caso esse parâmetro seja diferente do valor informado, 
exiba na tela O número ${parâmetro} não é válido para 
dia de semana.
Caso o valor esteja entre os valores permitidos, 
siga a regra a seguir para apresentar o retorno:
01: Segunda
02: Terça
03: Quarta
04: Quinta
05: Sexta
06: Sábado
07: Domingo
*/

const numerosDaSemana = (num) => {
    switch (num) {
        case 01:
            return "Segunda";
            break; 
        case 02:
            return "Terça";
            break;
        case 03:
            return "Quarta";
            break;
        case 04:
            return "Quinta";
            break;
        case 05:
            return "Sexta";
            break;
        case 06:
            return "Sábado";
            break;
        case 07:
            return "Domingo";
            break;
        default:
            console.log(`O número ${num} não é válido`);
    }
}

console.log(numerosDaSemana(01));
console.log(numerosDaSemana(02));
console.log(numerosDaSemana(03));
console.log(numerosDaSemana(04));
console.log(numerosDaSemana(05));
console.log(numerosDaSemana(06));
console.log(numerosDaSemana(07));
console.log(numerosDaSemana(08));