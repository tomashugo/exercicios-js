// Arrow Function
const soma = (a, b) => a + b;
console.log(soma(2, 3));

// Arrow Function (this)
const lexico1 = () => console.log(this == exports);
lexico1();

// parametro default
function log(texto = "Node") {
  console.log(texto);
}

log(undefined);
log();
log("NodeJS");

// operador rest
function total(...numeros) {
  const soma = numeros.reduce((anterior, atual) => anterior + atual);
  return soma;
}

console.log(total(1, 2, 3, 4, 5, 6));
