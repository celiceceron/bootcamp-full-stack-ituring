/*
Crie uma função que receba um objeto como parâmetro 
e imprima a lista de chaves que ele possui.
*/


const exibeInformacoes = (cozinha) => {
    console.log(Object.keys(c));
};

let c = {
    marca: "Tramontina",
    produto: "Jogo de talheres",
    preco: 500,
    quantidade: 132,
    categoria: "Utensilhos domésticos"

};

exibeInformacoes(c);
/*
//SOLUÇÃO  
let exibeChavesObjeto = objeto => {
    console.log(Object.keys(objeto));
};

//TESTANDO A SOLUÇÃO 
const produto = {
    marca: "Tramontina",
    produto: "Jogo de talheres",
    preco: 500,
    quantidade: 132,
    categoria: "Utensilhos domésticos"
};
exibeChavesObjeto(produto);
*/