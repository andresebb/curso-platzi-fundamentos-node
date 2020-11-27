// Con electron podemos hacer aplicaciones de escritorio.

//Podemos pasar webs como si fueran apps de escritorios

const { app, BrowserWindow } = require("electron");

let ventanaPrincipal;

//Cuando este listo ejecuta createWindow
app.on("ready", crearVentana);

function crearVentana() {
  ventanaPrincipal = new BrowserWindow({
    width: 800,
    height: 600,
  });

  ventanaPrincipal.loadFile("index.html");
}
