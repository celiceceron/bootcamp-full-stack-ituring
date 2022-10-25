/*
Crie uma função que recebendo uma lista de depósitos 
e retiradas, exiba o resumo do extrato mensal de sua 
conta com as seguintes informações no exemplo abaixo. 
Para exibir, utilize o console.log() dentro da função.
*/

let exibeExtrato = lista => {
    let saldoFinal = 0
    let totalDepositos = 0

    for (item of lista) {
        totalDepositos += item > 0 ? item : 0
        saldoFinal += item
    }
    const positivoOuNegativo = saldoFinal > 0 ? "positivo" : "negativo"

    console.log(`O valor total depositado foi de: R$ ${totalDepositos}`)
    console.log(`O valor total retirado foi de: R$ ${totalDepositos - saldoFinal}`)
    console.log(`O saldo final de sua conta foi ${positivoOuNegativo} no valor de R$ ${Math.abs(saldoFinal)}`)
}

/* TESTANDO A SOLUÇÃO */
let listaDepositosRetiradas = [100, -20, -30, 10, -7, -21, -5]
exibeExtrato(listaDepositosRetiradas)
listaDepositosRetiradas = [-100, -20, -30, 10, -7, -21, -5]
exibeExtrato(listaDepositosRetiradas)