/*
Função 1 - Receber o nome do comprador como parâmetro 
e exibir na tela a informação Olá, <nome do comprador>!.
*/

function nomeDoComprador(nome) {
    nome = ("Maria");
    console.log(`Olá, ${nome}!`);

}


/*Função 2 - Esta função deverá ter 3 parâmetros: nome do 
produto, nome de quem recebeu o produto e o endereço de 
entrega. Ela deverá exibir a seguinte informação na tela:

Fizemos a entrega do produto NomeDoProduto no endereço 
EnderecoDeEntrega com sucesso!
O seu produto foi recebido por: NomeDaPessoaQueRecebeuOProduto
Esperamos que você esteja contente com o produto.
Caso contrário, fale conosco em até 7 dias para que 
possamos ajudar.
*/

function entregaDoProduto(produto, recebidoPor, endereco){
    produto = ("Protetor solar");
    recebidoPor = ("João");
    endereco = ("Avenida das Américas, número 20");

    console.log(`Fizemos a entrega do produto ${produto} no endereço 
    ${endereco} com sucesso!
    O seu produto foi recebido por: ${recebidoPor}
    Esperamos que você esteja contente com o produto.
    Caso contrário, fale conosco em até 7 dias para que 
    possamos ajudar.`);

}

/*Função 3 - Esta função terá 1 parâmetro: nome de quem
enviou o email. Ela deverá exibir a seguinte informação 
na tela:
Atenciosamente,
NomeDaPessoaQueEnviouOEmail
*/

function remetente(nomedoremetente){
    nomedoremetente = ("José Silva");
    console.log(`Atenciosamente, ${nomedoremetente}`);

}

nomeDoComprador();
entregaDoProduto();
remetente();
