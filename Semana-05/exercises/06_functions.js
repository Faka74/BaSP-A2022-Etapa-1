// Exercise-6a
var result6A;
function suma(a, b) {
    return a + b;
}
result6A = suma(3, 5);
console.log('\n-Exercise 6.a:');
console.log(result6A);

// Exercise-6b
function sumaExerciseB(a, b) {
    if (typeof a != 'number' || typeof b != 'number') {
        alert("Uno de los parametros da error.\nNo es un numero.\nValor devuelto NaN.")
        return NaN;
    } else {
        return a + b;
    }
}

// Exercise-6c
function validateInteger(a) {
    if (typeof a === 'number') {
        return true;
    }
}
// Exercise-6d
function sumaExerciseB(a, b) {
    if (typeof a != 'number' || typeof b != 'number') {
        alert("Uno de los parametros da error.\nNo es un numero.\nValor devuelto NaN.")
        return NaN;
    } else {
        var responseA = (a % 1 === 0) ? true : false;
        if (!responseA) {
            alert('Error, no es un entero. Es decimal');
            a = Math.round()
        }
        var responseB = (b % 1 === 0) ? true : false;
        if (!responseB) {
            alert('Error, no es un entero. Es decimal');
            b = Math.round()
        }
        return a + b;
    }
}

// Exercise-6e
function validadorEntero(a) {
    var responseA = (a % 1 === 0) ? true : false;
    if (!responseA) {
        alert('Error, no es un entero');
        a = Math.round()
    }
    return a;
}
// la llamo en la funcion de suma
function sumaExerciseB(a, b) {
    if (typeof a != 'number' || typeof b != 'number') {
        alert("Uno de los parametros da error.\nNo es un numero.\nValor devuelto NaN.")
        return NaN;
    } else {
        validadorEntero(a);
        validadorEntero(b);
        return a + b;
    }
}