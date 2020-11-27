//Gestion de datos binarios

// Los buffer son conjuntos de datos en crudo, datos binarios,
// que podemos tratar en NodeJS para realizar diversos tipos de acciones.

// let buffero = Buffer.alloc(4); // EL 4 se refiere a los expacios que tendra
// console.log(buffero);

// let buffer = Buffer.from([1, 2, 5]);

let buffer = Buffer.from("Hola");

// console.log(buffer);
// console.log(buffer.toString);

// --

let abc = Buffer.alloc(26);
// console.log(abc);

//El 97 debido a la tabla ascii
for (let i = 0; i < 26; i++) {
  abc[i] = i + 97;
}

console.log(abc.toString());
