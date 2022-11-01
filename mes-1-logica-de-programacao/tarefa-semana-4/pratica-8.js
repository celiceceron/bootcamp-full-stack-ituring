/*
Crie uma função que receba uma lista de objetos de filmes 
como parâmetro. Exiba as informações de cada item da lista 
de acordo com a saída esperada abaixo.
*/


const exibeFilmes = (listaDeFilmes) => {
    let resultadoFilme1 = lista[0].titulo + "(Nota: " + 7.8 +
    "* Duração:" + lista[2].duracao +
   /* "* Ano de publicação: " + lista[3].titulo +
    "* Gênero: " + lista[4].genero;*/

    console.log(resultadoFilme1)
     
};
let lista = [{
    titulo: "Estrelas Além do Tempo",
    notaAvaliacao: 7.8,
    duracao: 127,
    anoPublicacao: 2016,
    genero: ["Biografia", "Drama", "História"]
},
{
    titulo: "Top Gun",
    notaAvaliacao: 8.6,
    duracao: 130,
    anoPublicacao: 2022,
    genero: ["Ação", "Drama"]  
},
{
    titulo: "O Jogo da Imitação",
    notaAvaliacao: 8.0,
    duracao: 114,
    anoPublicacao: 2014,
    genero: ["Biografia", "Drama", "Suspense", "Guerra"]
}];

exibeFilmes();



