// Con gult podemos automatizar procesos

const gulp = require("gulp");
const server = require("gulp-server-livereload");

//Una tarea
gulp.task("construir", function (cb) {
  console.log("Construyendo el sitio");
  setTimeout(cb, 1200);
});

//otra tarea
gulp.task("serve", function (cb) {
  gulp.src("www").pipe(
    server({
      livereload: true,
      open: true,
    })
  );
});

//Asi ejecutamos dos tareas a la ves
gulp.task("default", gulp.series("construir", "serve"));
