/*
Crie uma função que recebendo como argumento uma lista 
de votos, exiba na tela quantos votos recebeu cada país 
com base no código acima. 
Para exibir, utilize o console.log() dentro da função.
*/

/*

    const votacaoPaises = [
    {
        Pais: "Brasil",
    votos: 3
    },
    {
        Pais: "Argentina", 
    votos: 2
    },
    {
        Pais: "Espanha", 
    votos: 1
    },
    {
        Pais: "Portugal", 
    votos: 2
    }
    ];
    const resultado = 'Brasil é o preferido para ganhar a Copa do Mundo!'
    
    votacaoPaises.sort(function(a, b) {
        if(a.Pais < b.votos) {
            return -1;
        } else {
            return true;
        }
        
    });

    console.log(votacaoPaises, resultado);

    */

    // EX:
    /*
const pessoas = [
    {
        nome: "Matheus", 
        idade: 29
    },
    {
        nome: "Pedro", 
        idade: 18
    },
    {
        nome: "Maria,",
        idade: 40
    },
    {
        nome: "Alan",
        idade: 63
    }
];

pessoas.sort(function(a, b) {
    if(a.nome < b.nome) {
        return -1;
    } else {
        return true;
    }
});

console.log(pessoas);
*/


let verificaPreferidoDaCopa = (votosBrasil, votosArgentina, votosEspanha, votosPortugal) => {
    if (votosBrasil >= votosArgentina && votosBrasil >= votosEspanha && votosBrasil >= votosPortugal)
        return "Brasil"
    else if (votosArgentina >= votosEspanha && votosArgentina >= votosPortugal)
        return "Argentina"
    else if (votosEspanha >= votosPortugal)
        return "Espanha"
    else
        return "Portugal"
}

let exibePreferidoDaCopa = listaVotos => {
    let votosBrasil = 0
    let votosArgentina = 0
    let votosEspanha = 0
    let votosPortugal = 0

    for (voto of listaVotos) {
        votosBrasil += voto === 1 ? 1 : 0
        votosArgentina += voto === 2 ? 1 : 0
        votosEspanha += voto === 3 ? 1 : 0
        votosPortugal += voto === 4 ? 1 : 0
    }
    
    var preferido = verificaPreferidoDaCopa(votosBrasil, votosArgentina, votosEspanha, votosPortugal)

    console.log(`Brasil: ${votosBrasil} voto(s)`)
    console.log(`Argentina: ${votosArgentina} voto(s)`)
    console.log(`Espanha: ${votosEspanha} voto(s)`)
    console.log(`Portugal: ${votosPortugal} voto(s)\n`)

    console.log("Resultado:")
    console.log(`${preferido} é o preferido para ganhar a Copa do Mundo!`)
}

let listaVotos = [1, 1, 1, 4, 4, 2, 3, 2]
exibePreferidoDaCopa(listaVotos)
