const array = [1, 2, 3, 4, 5, 6, 7];

for (let elemento of array) {
  // console.log(elemento);
}

//*Ejercicio:

//?Imprimí en la consola solo los nombres de las computadoras cuyo sistema operativo es windows.

const computadoras = [
  { nombre: 'Asus', sistema_operativo: 'Windows' },
  { nombre: 'Macbook', sistema_operativo: 'macOS' },
  { nombre: 'Dell', sistema_operativo: 'Windows' },
  { nombre: 'Lenovo', sistema_operativo: 'Linux' },
  { nombre: 'HP', sistema_operativo: 'Windows' },
];

let computadorasConSOWindows = [];

for (let objeto of computadoras) {
  if (objeto.sistema_operativo === 'Windows') {
    computadorasConSOWindows.push(objeto);
  }
}

console.log(computadorasConSOWindows);
