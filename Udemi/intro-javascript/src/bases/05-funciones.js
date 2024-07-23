//Esto actúa igual que una función con un valor () y un return
const nombre = (nombre) => `Hola ${nombre}`;

console.log(nombre(`Gokú`));

const getUser = () => ({
  uid: 1234,
  name: `felipe`,
});

console.log(getUser());
