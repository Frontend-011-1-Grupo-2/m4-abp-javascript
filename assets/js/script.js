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
let numero1 = prompt('Escriba un número');
let numero2 = prompt('Escriba otro número');
let operacion = prompt(
  'Escriba una operacion: suma, resta, multiplicación o división',
);

// let suma = numero1 + numero2;
// let resta = numero1 - numero2;
// let multiplicacion = numero1 * numero2;
// let division;
let resultado;

if (numero2 === 0) {
  console.error('No se puede dividir por 0');
} else {
  division = numero1 / numero2;
}

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

// Avance Leccion 3:
