/*
Crie uma função que receba apenas 1 
argumento de entrada: o número que você 
utilizará para fazer a tabuada.
*/

let tabuadaDo6 = n => {
    for (let i = 1; i <= 10; i++)
    console.log (`${i} x ${n} = ${i * n}`)
}

tabuadaDo6(6);

/*
const tabuada = (num) => {
    let i = 1;

    while (i <= 10){
        
        console.log(`${num} x ${i} = ${num * i}`);
        i++;
    }
}
// 
tabuada(7);
*/
