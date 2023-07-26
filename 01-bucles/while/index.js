//*Ejercicio número 1

//?Como verás el ciclo while esta en un bucle infinito. Corregí y lográ parar el bucle.

let counter = 0;
let resultados = [];

while (counter < 20) {
  resultados.push(counter);
  //*Incrementamos el valor de la condición para que llegue a un punto que deje de ser true y se corte el bucle
  counter++;
}

console.log(resultados);
