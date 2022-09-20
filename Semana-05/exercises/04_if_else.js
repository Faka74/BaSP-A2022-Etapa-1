// Exercise-4a
var numero = (Math.random());
console.log(numero);

if (numero >= 0.5) {
    console.log(alert('This number is greater than 0.5'))
}
else if (numero <= 0.5) {
    console.log(alert('This number is lower than 0.5'))
}

// Exercise-4b
var nombre = 'Facundo';
var edad = '18';

if (edad <= 2) {
    console.log(alert('Es un bebe'));
}

else if (edad <= 12) {
    console.log(alert('Es un niño'));
}

else if (edad <= 19) {
    console.log(alert('Es un adolescente'));
}

else if (edad <= 30) {
    console.log(alert('Es un joven'));
}

else if (edad <= 60) {
    console.log(alert('Es un adulto'));
}

else if (edad <= 75) {
    console.log(alert('Es un adulto mayor'));
}

else {
    console.log(alert('Es un anciano'));
}