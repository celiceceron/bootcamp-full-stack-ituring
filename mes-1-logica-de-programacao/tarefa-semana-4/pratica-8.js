/*
Crie uma função que receba uma lista de objetos de filmes 
como parâmetro. Exiba as informações de cada item da lista 
de acordo com a saída esperada abaixo.
*/


const exibeFilmes = (listaDeFilmes) => {
    let resultado1 = 
        lista[0].titulo +  
        ` (Nota: ` + 
        lista[0].notaAvaliacao  +
        ` \n • Duração: ` + 
        lista[0].duracao + 
        ` minutos \n` + 
        ` • Ano de publicação: ` + 
        lista[0].anoPublicacao  +
        ` \n • Gênero: biografia, drama e história \n`

    let resultado2 = 
        lista[1].titulo +  
        ` (Nota: ` + 
        lista[1].notaAvaliacao  +
        ` \n • Duração: ` + 
        lista[1].duracao + 
        ` minutos \n` + 
        ` • Ano de publicação: ` + 
        lista[1].anoPublicacao  +
        ` \n • Gênero: biografia, drama e história \n`

    let resultado3 = 
        lista[2].titulo +  
        ` (Nota: ` + 
        lista[2].notaAvaliacao  +
        ` \n • Duração: ` + 
        lista[2].duracao + 
        ` minutos \n` + 
        ` • Ano de publicação: ` + 
        lista[2].anoPublicacao  +
        ` \n • Gênero: biografia, drama e história \n`

   console.log(resultado1);

   console.log(resultado2);

   console.log(resultado3);

    
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

/*
//SOLUÇÃO  
let exibeInfoFilmes = listaFilmes => {
    listaFilmes.forEach(filme => {
        console.log(`${filme.titulo} (Nota: ${filme.notaAvaliacao})`);
        console.log(`• Duração: ${filme.duracao} minutos`);
        console.log(`• Ano de publicação: ${filme.anoPublicacao}`);

        const generosMenosUltimo = filme.genero.slice(0, -1);
        const ultimoGenero = filme.genero.slice(-1);
        const infoGeneros = generosMenosUltimo.join(', ') + ' e ' + ultimoGenero;

        const resultadoGenero = filme.genero.length > 1 ? infoGeneros : genero[0];

        console.log(`• Gênero: ${resultadoGenero}\n`);
    });
};

//TESTANDO A SOLUÇÃO 
const listaFilmes = [{
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
*/

