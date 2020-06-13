// Função Factory 2 - personalizada

// function criarProduto (nome, preco, desconto = 0.1) {
//     return {
//         nome: nome,
//         preco: preco,
//         desconto: desconto
//     }
// }

function criarProduto (nome, preco, desconto = 0.1) {
    return {
        nome,
        preco,
        desconto
    }
}

console.log(criarProduto('iPhone',5000))
console.log(criarProduto('MacBook',10000))