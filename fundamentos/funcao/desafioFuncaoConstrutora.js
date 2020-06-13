function Pessoa (nome) {
    this.nome = nome

    this.falar = function() {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const joao = new Pessoa('João')
joao.falar()