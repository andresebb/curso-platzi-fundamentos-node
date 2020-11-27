// Asi Puedes ver cuando tiempo tarda en ejecutarse una operacion
// console.time("todo");
// console.timeEnd("todo");

let suma = 0;
console.time("bucle");
for (let i = 0; i < 1000000000; i++) {
  suma += 1;
}
console.timeEnd("bucle");

//Asi funciona con funciones asincronas

console.time("asincrono");
console.log("Empieza el proceso async");
asincrona().then((dta) => {
  console.timeEnd("asincrono");
});

function asincrona() {
  return new Promise((resolve) => {
    setTimeout(function () {
      console.log("Termina el proceso asíncrono");
      resolve("hola");
    }, 1000);
  });
}
