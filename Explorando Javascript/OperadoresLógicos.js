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
const estaAcompanhada = true;
console.log("Destinos possíveis:");
console.log(listaDeDestinos);




if (idadeComprador >= 18 || estaAcompanhada == true) {
    console.log("Comprador maior de idade");
    listaDeDestinos.splice(2);
} else if (estaAcompanhada == true) {
    console.log("Comprador está acompanhado");
} else {
    console.log("Não é maior de Idade e não posso vender");
    listaDeDestinos

}


//console.log(listaDeDestinos);