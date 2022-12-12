const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
    'Curitiba',
    ' Floripa',
    'Foz do Iguaçu',
    'Fortaleza'

);





const idadeComprador = 15;
console.log("Destinos possíveis:");
console.log(listaDeDestinos);

if (idadeComprador >= 18) {
    console.log("Comprador maior de idade");
    listaDeDestinos.splice(2);
} else {
    console.log("Não é maior de idade e não posso vender");
}

//console.log(listaDeDestinos);