const numeroDeMes = process.argv[2];

/* 
 utiliza el siguiente array para obtener la información del mes
*/

const informacionMensual = [
  {
    nombreDelMes: 'Enero',
    cantidadDeDias: 31,
    eventoDelMes: 'Año Nuevo',
  },
  {
    nombreDelMes: 'Febrero',
    cantidadDeDias: 28,
    eventoDelMes: 'Día de San Valentín',
  },
  {
    nombreDelMes: 'Marzo',
    cantidadDeDias: 28,
    eventoDelMes: 'Día de San Valentín',
  },
  {
    nombreDelMes: 'Abril',
    cantidadDeDias: 28,
    eventoDelMes: 'Día de San Valentín',
  },
  {
    nombreDelMes: 'Mayo',
    cantidadDeDias: 28,
    eventoDelMes: 'Día de San Valentín',
  },
  {
    nombreDelMes: 'Junio',
    cantidadDeDias: 28,
    eventoDelMes: 'Día de San Valentín',
  },
  {
    nombreDelMes: 'Julio',
    cantidadDeDias: 28,
    eventoDelMes: 'Día de San Valentín',
  },
  {
    nombreDelMes: 'Agosto',
    cantidadDeDias: 28,
    eventoDelMes: 'Día de San Valentín',
  },
  {
    nombreDelMes: 'Septiembre',
    cantidadDeDias: 28,
    eventoDelMes: 'Día de San Valentín',
  },
  {
    nombreDelMes: 'Octubre',
    cantidadDeDias: 28,
    eventoDelMes: 'Día de San Valentín',
  },
  {
    nombreDelMes: 'Noviembre',
    cantidadDeDias: 28,
    eventoDelMes: 'Día de San Valentín',
  },
  {
    nombreDelMes: 'Diciembre',
    cantidadDeDias: 28,
    eventoDelMes: 'Día de San Valentín',
  },
];

const posicionEnElArray = numeroDeMes - 1;

const infoDelMes = informacionMensual[posicionEnElArray];

console.log('Numero de mes:', numeroDeMes);
console.log('Nombre del mes:', infoDelMes.nombreDelMes);

// # Descomentar las siguientes lineas y hacer que funcionen

console.log('Cantidad de días:', infoDelMes.cantidadDeDias);
console.log('Evento del mes:', infoDelMes.eventoDelMes);
