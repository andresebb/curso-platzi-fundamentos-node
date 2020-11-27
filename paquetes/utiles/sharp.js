//Libreria para resized de imagenes de imagenes
const sharp = require("sharp");

sharp("original.png").resize(80).grayscale().toFile("resized.png");
