/* Função que calcula a quantidade de desconto para um produto
Criar parâmetro para valor do produto.
Criar parâmetro para valor do desconto.
*/

function descontoNoProduto(valor, desconto){
    const valorFinal = valor* (1 - desconto/100);
    return valorFinal.toFixed(2);

}

const valorComDesconto = descontoNoProduto (250,30);

console.log(valorComDesconto);
