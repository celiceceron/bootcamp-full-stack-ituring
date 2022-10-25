/*
Crie uma função que recebe como argumento uma lista de
pessoas e exibe na tela os grupos formados com 2 pessoas. 
Utilize o console.log() dentro da função para exibir os grupos. 
Se faltar alguém, acrescente-a no último grupo. 
*/

/*
function dividirEmGrupos(alunos, tamanho) {

    let novosGrupos = [];
    let i = 0;

    while (i < alunos.length - 1) {
        novosGrupos.push(alunos.slice(i, i + tamanho));
        i += tamanho;
}
    return novosGrupos;
   
}

console.log(dividirEmGrupos(["Anderson Luz", "Fabio Vechia", "Claudia Lopes", "Rafael Alves", "Maria Mansano", "Jairo Ferreira", "Vitor Ribeiro"], 2));

*/

let exibeGruposFormadosS4 = (lista, tamGrupo) => {
    let grupos = []
    const tamLista = lista.length
    const qtdGrupos = parseInt(tamLista/tamGrupo)
    const qtdGruposMenosUm = qtdGrupos - 1

    // Montando os grupos e colocando dentro de `grupos`
    for (let i = 0; i < qtdGruposMenosUm; i++) {
        const indiceInicioGrupoAtual = i*tamGrupo
        const indiceFimGrupoAtual = indiceInicioGrupoAtual + tamGrupo
        const grupoAtual = lista.slice(indiceInicioGrupoAtual, indiceFimGrupoAtual)
        grupos.push(grupoAtual)
    }

    const indiceInicioUltimoGrupo = qtdGruposMenosUm*tamGrupo
    grupos.push(lista.slice(indiceInicioUltimoGrupo, tamLista))

    // Exibindo cada pessoa de cada grupo montado (veja que com o método .join() fica muito mais fácil colocar a vírgula entre os membros do grupo)
    for (let i = 0; i < grupos.length; i++) {
        console.log(`Grupo ${i + 1}: ${grupos[i].join(', ')}`)
    }
}
let lista = ["Anderson Luz", "Fabio Vechia", "Claudia Lopes", "Rafael Alves", "Maria Mansano", "Jairo Ferreira", "Vitor Ribeiro", "Pedro Abreu", "Gilberto Machado", "Guilherme Rodrigues", "Augusto Roberto"]

exibeGruposFormadosS4(lista, 1)
exibeGruposFormadosS4(lista, 2)
exibeGruposFormadosS4(lista, 3)
exibeGruposFormadosS4(lista, 4)