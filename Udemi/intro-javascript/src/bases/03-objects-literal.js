const persona = {
  nombre: "Tony",
  apellido: "Stark",
  direccion: {
    calle: "calle falsa 123",
    codPost: 1234,
    ciudad: `NUEVA ORLEANS`,
  },
};

//con console table puedes mostrat una rabla clave valor del objeto
console.table(persona);

const persona2 = { ...persona };

persona2.nombre = "Tanos";

console.log(persona2);
console.log(persona);
