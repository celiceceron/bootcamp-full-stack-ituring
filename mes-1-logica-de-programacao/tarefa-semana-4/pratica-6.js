/*
Crie uma função que recebe como argumento um objeto 
que tem informações de um filme e exibe o nome 
do filme o seu tempo de duração.
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
