/*
Crie uma função que receba apenas 1 
argumento de entrada: o número que você 
utilizará para fazer a tabuada.
*/

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

// EX2: ITURING 

let tabuada = n => {
    for (let i = 1; i <= 10; i++)
        console.log(`${i} x ${n} = ${i*n}`)
}

tabuada(9)
