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

        f.show = function(){
        console.log(this.titulo);
        console.log(this.notaAvaliacao);
        console.log(this.duracao);
        console.log(this.anoPublicacao);
        console.table(this.categoria); 
        }

    return f;

};

let f = exibeFilme("Estrelas Além do Tempo", 7.8, 127, 2016, "Drama");

f.show();