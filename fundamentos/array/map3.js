Array.prototype.map2 = function (callback) {
  const retorno = [];
  for (let i = 0; i < this.length; i++) {
    retorno.push(callback(this[i], i, this));
  }
  return retorno;
};

const carrinho = [
  '{"nome":"Borracha","preco":3.45}',
  '{"nome":"Caderno","preco":13.90}',
  '{"nome":"Kit de Lapis","preco":41.22}',
  '{"nome":"Caneta","preco":7.50}',
];

const novo_carrinho = carrinho.map2(function (e) {
  let objeto = JSON.parse(e);
  return objeto.preco;
});

console.log(novo_carrinho);
