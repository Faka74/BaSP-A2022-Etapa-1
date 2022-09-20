// Exercise-2a
var palabraMayuscula = 'Estas palabras se transformaran en mayuscula';
console.log(palabraMayuscula.toUpperCase());

// Exercise-2b
var textoExtraido = 'Una parte de este texto sera extraido';
console.log(textoExtraido.substring(0, 5));

// Exercise-2c
var textoExtraidoTwo = 'Una parte de este texto sera extraido';
console.log(textoExtraido.substring(37, 34));

// Exercise-2d
var ejemploTexto = ('este texto sera modificado');
console.log(ejemploTexto.substring(0, 1).toUpperCase() + ejemploTexto.substring(1, 26));

// Exercise-2e
var espacioEnBlanco = ('Donde esta el primer espacio en blanco?');
console.log(espacioEnBlanco.indexOf(' '));

// Exercise-2f
var endOfExerciseTwo = ('programacion orientada');
console.log(endOfExerciseTwo.substring(0, 1).toUpperCase() + endOfExerciseTwo.substring(1, 13) + endOfExerciseTwo.substring(13, 14).toUpperCase() + endOfExerciseTwo.substring(14, 23));
console.log(endOfExerciseTwo.indexOf('programacion'))
console.log(endOfExerciseTwo.indexOf('orientada'))
