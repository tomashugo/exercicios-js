const pai = {
    nome: 'Pedro',
    corCabelo: 'preto'
}

const filha1 = Object.create(pai) // filha foi criado com pai como prototipo
filha1.name = 'Ana'

console.log(filha1.corCabelo)

const filha2 = Object.create(pai, {
    nome: { value: 'Bia', writable: false, enumerable: true}
})

filha2.nome = 'Carla'
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)

for (let key in filha1) {
    filha1.hasOwnProperty(key) ? console.log(key) : console.log(`Por herança: ${key}`)
}

for (let key in filha2) {
    filha2.hasOwnProperty(key) ? console.log(key) : console.log(`Por herança: ${key}`)
}