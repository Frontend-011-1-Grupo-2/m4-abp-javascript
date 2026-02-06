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
let numero1 = parseInt(prompt('Escriba un número'));
let numero2 = parseInt(prompt('Escriba otro número'));
let operacion = prompt(
  'Escriba una operacion: suma, resta, multiplicación o división',
).toLowerCase();

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
