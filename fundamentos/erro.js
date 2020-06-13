function tratarErro (erro) {
    throw {
        nome: erro.name,
        msg: erro.message,
        data: new Date()
    }
}

function imprimirNomeGritado (obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!')
    }
    catch (e) {
        tratarErro(e)
    }
    finally {
        console.log('final')
    }
}

const obj = {
    name: 'Tomas'
}


imprimirNomeGritado(obj)
