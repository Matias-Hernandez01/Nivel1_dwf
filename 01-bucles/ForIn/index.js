const iterable = [
  {
    nombre: 'Juan',
    apellido: 'Gomez',
    edad: 30,
    familiares: ['María', 'Pedro', 'Luisa', 'Ana'],
  },
  {
    nombre: 'Nico',
    apellido: 'Sanchez',
    edad: 25,
    familiares: ['Ramiro', 'Diego', 'Isabel', 'Pome'],
  },
  {
    nombre: 'Loana',
    apellido: 'Rivera',
    edad: 12,
    familiares: ['Quica', 'Hugo', 'Carlos', 'Sandra'],
  },
];

for (let clave in iterable) {
  if (iterable[clave].edad > 12) {
  }
}

//*Ejercicio

//? Construye un objeto que represente un producto de un e-commerce, el cual deberá tener las siguientes propiedades:

//id
//nombre
//descripción
//precio
//cantidad en stock
//Luego, usa el bucle for...in para recorrer las propiedades de este objeto, e imprimir el nombre de cada
//propiedad y su valor correspondiente en la consola.

const producto = {
  id: 1,
  nombre: 'Televisor RCA',
  descripcion:
    'Televisor smart tv de 44 pulgadas, lanzado al mercado en el año 2019',
  precio: 80000,
  cantidadEnStock: 10,
};

for (let clave in producto) {
  console.log(clave, ':', producto[clave]);
}
