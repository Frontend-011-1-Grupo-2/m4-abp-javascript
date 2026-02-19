// Avance Lección 1:
/* 
  - prompt para pedirle al usuario un dato o mensaje
  - alert: para mostrar un mensaje informativo. OJO! detienen la ejecución del programa
*/
// 1. Mensaje en consola
console.log(
  '%c********* Bienvenido a la aplicación en consola *********',
  'color: white; background-color: teal; padding: 5px; border-radius: 5px',
);

// prompt('Escriba su nombre');

// alert('Este mensaje detendrá la ejecución del programa');

// confirm('Seguro que desea eliminar el recurso?'); // mensaje de confirmación para el usuario: Cancelar = devuelve false, Aceptar = devuelve True

// Después del alert...
// console.log('Se ve?');
// console.log('Aló?');

// const parrafo = document.getElementById('mensaje');
// console.log(parrafo.textContent); // Para VER el contenido de texto
// parrafo.textContent = 'Contenido del párrafo cambiado con JS';

// Avance Lección 2:
// let numero1 = parseInt(prompt('Escriba un número'));
let numero1 = 2;
// let numero2 = parseInt(prompt('Escriba otro número'));
let numero2 = 2;
// let operacion = prompt(
//   'Escriba una operacion: suma, resta, multiplicación o división',
// ).toLowerCase();
let operacion = 'suma';

let resultado;

// isNaN -> evalua si algo No es un número (Not a Number). En este caso estamos usando el operador de negación (!)
// 'si es que numero1 es un número' ...
// Comprobamos tambien que el tipo de dato sea numérico con typeof === 'number'
// Ocupamos el operador AND (&&) para asegurarnos que todas las condiciones se cumplan
if (
  !isNaN(numero1) &&
  !isNaN(numero2) &&
  typeof numero1 === 'number' &&
  typeof numero2 === 'number'
) {
  switch (operacion) {
    case 'suma':
      resultado = numero1 + numero2;
      console.log('El resultado de la suma es:', resultado);
      break;
    case 'resta':
      resultado = numero1 - numero2;
      console.log('El resultado de la resta es:', resultado);
      break;
    case 'multiplicacion':
      resultado = numero1 * numero2;
      console.log('El resultado de la multiplicacion es:', resultado);
      break;
    case 'division':
      if (numero2 === 0) {
        console.error('No se puede dividir por 0');
      } else {
        resultado = numero1 / numero2;
        console.log('El resultado de la division es:', resultado);
      }
      break;
    default:
      console.error('La operación ingresada no es válida');
  }
} else {
  console.error('Solamente debes ingresar números');
}

// Avance Leccion 3:
/* 

○  Crear un arreglo con una lista de elementos. 
○  Usar for y while para recorrer arreglos
- Implementar una función que filtre elementos según una condición
*/

const edades = [23, 44, 13, 8, 3, 25, 77, 11, 32];

// Recorrer arreglo con for
console.log('--- Recorrer con for ---');
console.log(edades);
for (let i = 0; i < edades.length; i++) {
  console.log(`Índice ${i} en arreglo "edades": ${edades[i]}`);
}

// Recorrer arreglo con while
console.log('--- Recorrer con while ---');

let iterador = 0;
while (iterador < edades.length) {
  console.log(`Índice ${iterador} en arreglo "edades": ${edades[iterador]}`);
  iterador++;
}

const mayoresDeEdad = edades.filter((edad) => edad >= 18);
// const mayoresDeEdad = edades.filter(function (edad) {
//   return edad >= 18;
// });
console.log('Mayores de edad: ', mayoresDeEdad);

// Avance Lección 4:
/* 
- Crear funciones para las operaciones matematicas
- Implementar una función que reciba parámetros y retorne un resultado
- Llamar funciones dentro de otras funciones para optimizar el código
*/

const suma = (num1, num2) => `El resultado de la suma es. ${num1 + num2}`;
const multiplicacion = (num1, num2) =>
  `El resultado de la multiplicación es. ${num1 * num2}`;
const division = (num1, num2) => {
  if (num2 === 0) {
    console.warn('No se puede dividir por 0');
    return 'No se puede dividir por 0';
  }
  return `El resultado de la división es. ${num1 / num2}`;
};
const resta = (num1, num2) => `El resultado de la resta es. ${num1 - num2}`;

const calculo = (num1, num2, operacion) => operacion(num1, num2);
console.log(calculo(2, 0, division));

// Ocupando operador rest (...) para recibir una cantidad indefinida de numeros
const suma2 = (...numeros) =>
  numeros.reduce((acumulador, numero) => acumulador + numero, 0);
const calculo2 = (operacion, ...numeros) => operacion(...numeros);
console.log(
  'Calculando con cantidad indefinida de numeros',
  calculo2(suma2, 3, 4, 100, 23, 5),
);

// Avance Lección 5:
/* 
- Crear un objeto con propiedades y valores
- Implementar métodos dentro de un objeto
- Usar un arreglo de objetos y recorrerlo con map o forEach
*/

const mascota = {
  nombre: 'Ron',
  especie: 'Gato',
  edad: 11,
  // Método ↓
  hablar: function () {
    return `${this.nombre} maúlla`;
  },
};

console.log(mascota.hablar());

const animales = [
  {
    nombre: 'Leon',
    edad: 7,
  },
  {
    nombre: 'Jirafa',
    edad: 1,
  },
  {
    nombre: 'Elefante',
    edad: 22,
  },
];

// forEach no devuelve nada
animales.forEach((animal) =>
  console.log(`${animal.nombre} tiene ${animal.edad} año/s`),
);

// map devuelve un nuevo array
const animalesConZoo = animales.map((animal) => {
  const nuevo = {
    ...animal,
    zoo: 'Front Zoo',
  };
  return nuevo;
});
console.log(animalesConZoo);
