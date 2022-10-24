/*
Crie uma função que recebendo como argumento uma lista 
de votos, exiba na tela quantos votos recebeu cada país 
com base no código acima. 
Para exibir, utilize o console.log() dentro da função.
*/


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