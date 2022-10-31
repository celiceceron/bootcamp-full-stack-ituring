/*
Crie uma função que recebe como argumento um objeto 
que tem informações de um filme e exibe o nome 
do filme o seu tempo de duração.
*/

const exibeFilme = (titulo, notaAvaliacao, duracao, anoPublicacao, categoria) =>{
    let f = {};

        f.titulo = titulo;
        f.notaAvaliacao = notaAvaliacao;
        f.duracao = duracao;
        f.anoPublicacao = anoPublicacao;
        f.categoria = categoria;

    f.show = function () {
            console.table("O filme ");
            console.table(this.titulo);
            console.table("que estreou em ");
            console.table(this.anoPublicacao);
            console.table("tem a avaliação de ");
            console.table(this.notaAvaliacao);
            console.table("pelo IMDb.");

        }

    return f;
};

let f = exibeFilme("Estrelas Além do Tempo", 7.8, 127, 2016, "Drama");

f.show();
