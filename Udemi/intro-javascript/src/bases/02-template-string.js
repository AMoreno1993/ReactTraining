const nombre = "Antonio";
const apellido = "Herrera";

let valorDado = 4;
valorDado = 3;
console.log(nombre, apellido, valorDado);

const nombreCompleto = `${nombre} ${apellido}`;
console.log(nombreCompleto);

function getSaludo(nombre) {
  return `Hola ` + nombre;
}

console.log(`Esto es un texto: ${getSaludo(nombre)}`);
