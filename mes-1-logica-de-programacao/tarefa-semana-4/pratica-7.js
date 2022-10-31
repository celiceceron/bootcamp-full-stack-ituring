/*
Crie uma função que receba um objeto como parâmetro 
e imprima a lista de chaves que ele possui.
*/


const exibeFilme = (filme) => {
    console.table("O filme ");
    console.table(filme.titulo);
    console.table("que estreou em ");
    console.table(filme.anoPublicacao);
    console.table("tem a avaliação de ");
    console.table(filme.notaAvaliacao);
    console.table("pelo IMDb.");
};

let f = {
    titulo: "Estrelas Além do Tempo",
    notaAvaliacao: 7.8,
    duracao: 127,
    anoPublicacao: 2016,
    categoria: "Drama"

};

exibeFilme(f);

// array com objeto
var obj = { 0: 'a', 1: 'b', 2: 'c' };
console.log(Object.keys(obj)); // console: ['0', '1', '2']