//? Ejercicio n°1

//*Dado el siguiente array de objetos

//1//!Usar un for para imprimir en la consola el nombre y la edad de cada animal en el array.
//2//!Usar un for in para imprimir en la consola todas las propiedades y valores de cada animal en el ////array..
//3//!Usar un while para imprimir en la consola el tipo de cada animal en el array y detener el loop cuando se encuentra un animal con un tipo de "acuático".

const animales = [
  { nombre: 'perro', tipo: 'mamífero', edad: '4' },
  { nombre: 'gato', tipo: 'mamífero', edad: '2' },
  { nombre: 'loro', tipo: 'ave', edad: '6' },
  { nombre: 'pez', tipo: 'acuático', edad: '1' },
  { nombre: 'rana', tipo: 'anfibio', edad: '3' },
];

//*Ejercicio numero 1 resuelto
for (let i = 0; i < animales.length; i++) {
  console.log(animales[i].nombre, animales[i].edad);
}
