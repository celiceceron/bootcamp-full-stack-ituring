/*
Crie uma função que recebe como argumento um objeto 
que tem informações de um filme e exibe o nome 
do filme o seu tempo de duração.
*/

const exibeFilme = (filme) => {
    let resultado = "O filme " + f.titulo + " que estreou em " +
    f.anoPublicacao + " tem a avaliação de " + f.notaAvaliacao + 
    " pelo IMDb.";
   
    console.log(resultado);
};

let f = {
    titulo: "Estrelas Além do Tempo",
    notaAvaliacao: 7.8,
    duracao: 127,
    anoPublicacao: 2016,
    categoria: "Drama"

};

exibeFilme(f);
