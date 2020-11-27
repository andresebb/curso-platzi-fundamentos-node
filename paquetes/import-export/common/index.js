// Traer nuestro modulo
const modulo = require("./modulo");

// ejecutar una funcion del modulo
modulo.saludar();
console.log(modulo.adios);

//Segunda forma de importar
const { saludar } = require("./modulo");
saludar();
