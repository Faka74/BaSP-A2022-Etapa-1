// Exercise-3a
var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log(meses[5]);
console.log(meses[11])

// Exercise-3b
console.log(meses.sort());

// Exercise-3c
meses.push(2023);
meses.unshift(2021);
console.log(meses);

// Exercise-3d
meses.pop();
meses.shift();
console.log(meses);

// Exercise-3e
meses.reverse();
console.log(meses);

// Exercise-3f
var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"].join(' - ');
console.log(meses);

// Exercise-3g
var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
meses.splice(0,4);
meses.pop();
console.log(meses);