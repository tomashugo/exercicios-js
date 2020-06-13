// novo no ES2015

const pessoa = {
    nome: 'ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua abc',
        numero: 1000
    }
}

const {nome, idade} = pessoa

console.log('nome =', nome)
console.log('idade =', idade)

const {nome : n, idade : i} = pessoa

console.log('n =', n)
console.log('i =', i)

const {endereco : { logradouro, numero }} = pessoa

console.log(logradouro, numero)