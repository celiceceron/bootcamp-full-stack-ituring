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
/*
//SOLUÇÃO  
let exibeDadosFilme = filme => {
    console.log(`O filme ${filme.titulo} que estreou em ${filme.lancamento} tem a avaliação de ${filme.nota} pelo IMDb.`);
};

//TESTANDO A SOLUÇÃO 
const filme = {
    titulo: "Estrelas Além do Tempo",
    nota: 7.8,
    duracao: 127,
    lancamento: 2016,
    categoria: "Drama"
};
exibeDadosFilme(filme);
*/