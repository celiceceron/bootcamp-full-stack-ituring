/*
Crie uma função que recebe como argumento uma lista de
pessoas e exibe na tela os grupos formados com 2 pessoas. 
Utilize o console.log() dentro da função para exibir os grupos. 
Se faltar alguém, acrescente-a no último grupo. 
*/

let exibeGruposFormados = (lista, tamGrupo) => {
    let grupos = [];
    const tamLista = lista.length
    const qtdGrupos = parseInt (tamGrupo/tamGrupo)
    const qtdGruposMenosUm = qtdGrupos -1

    for (let i = 0; i < qtdGruposMenosUm; i++) {
        const indiceInicioGrupoAtual = i*tamGrupo
        const indiceFimGrupoAtual = indiceInicioGrupoAtual + tamGrupo
        const grupoAtual = lista.slice(indiceInicioGrupoAtual, indiceFimGrupoAtual)
        grupos.push(grupoAtual)
    }

    const indiceInicioUltimoGrupo = qtdGruposMenosUm*tamGrupo
    grupos.push(lista.slice(indiceInicioUltimoGrupo, tamLista))

    for (let i = 0; i < grupos.length; i++) {
        console.table(`Grupo ${i + 1}: ${grupos[i].join(', ')}`)
    }
}

let lista = ["Anderson Luz", "Fabio Vechia", "Claudia Lopes", "Rafael Alves", "Maria Mansano", "Jairo Ferreira", "Vitor Ribeiro", "Pedro Abreu", "Gilberto Machado", "Guilherme Rodrigues", "Augusto Roberto"]

exibeGruposFormados(lista, 2)

