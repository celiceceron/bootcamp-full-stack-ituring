/*
Crie uma função que receba um objeto como parâmetro 
e imprima a lista de chaves que ele possui.
*/


const exibeinformacoes = (cozinha) => {
    console.log(Object.keys(c));
};

let c = {
    marca: "Tramontina",
    produto: "Jogo de talheres",
    preco: 500,
    quantidade: 132,
    categoria: "Utensilhos domésticos"

};

exibeinformacoes(c);

/*
console.log(Object.keys(obj)); // console: ['0', '1', '2']
*/