const arreglo = [1, 2, 3, 4];

//creamos una copia y anyadimos un 5 entre corchetes
let arreglo2 = [...arreglo, 5];

let arreglo3 = arreglo2.map(function (numero) {
  return numero + 1;
});

console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);
