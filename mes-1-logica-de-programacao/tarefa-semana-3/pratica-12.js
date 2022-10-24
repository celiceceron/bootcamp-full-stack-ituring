/*
Crie uma função que recebe como argumento uma lista de
pessoas e exibe na tela os grupos formados com 2 pessoas. 
Utilize o console.log() dentro da função para exibir os grupos. 
Se faltar alguém, acrescente-a no último grupo. 
*/


function dividirEmGrupos(alunos, tamanho) {

    let novosGrupos = [];
    let i = 0;

    while (i < alunos.length) {
        novosGrupos.push(alunos.slice(i, i + tamanho));
        i += tamanho;
}
    return novosGrupos;
   
}

console.log(dividirEmGrupos(["Anderson Luz", "Fabio Vechia", "Claudia Lopes", "Rafael Alves", "Maria Mansano", "Jairo Ferreira", "Vitor Ribeiro"], 2));
