const os = require("os");

// console.log(os.arch());   // Ver la arquitectura del os
// console.log(os.platform());  // Ver el tipo de os que es

// console.log(os.cpus()); // Ver los CPUs
// console.log(os.cpus().length);

// console.log(os.constants); //Errores

const SIZE = 1024;

function kb(bytes) {
  return bytes / SIZE;
}
function mb(bytes) {
  return kb(bytes) / SIZE;
}
function gb(bytes) {
  return mb(bytes) / SIZE;
}

console.log(os.freemem()); //Ver memoria ram disponible

// console.log(kb(os.freemem()));
// console.log(mb(os.freemem()));
// console.log(gb(os.freemem()));
// console.log(gb(os.totalmem())); // Ver la memoria ram que tienes en total

// console.log(os.homedir()); // El home del os
// console.log(os.tmpdir())

// console.log(os.hostname()); // Nombre del host de la maquina

// console.log(os.networkInterfaces()); // Ver la interfaz de red
