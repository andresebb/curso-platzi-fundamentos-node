//Primera Forma

function saludar() {
  console.log("Hola mundo!!");
}

export default {
  saludar,
  adios: "chao me voy",
};

//Segunda Forma
export const bye = () => {
  console.log("Soy BYE y me fui de aqui");
};
