var Cancion = /** @class */ (function () {
    function Cancion(tituloParam, generoCancionParam) {
        this.titulo = tituloParam;
        this.generoCancion = generoCancionParam;
    }
    Cancion.prototype.getAutor = function () {
        return this.autor;
    };
    Cancion.prototype.setAutor = function (autorParam) {
        this.autor = autorParam;
    };
    Cancion.prototype.datosCancion = function () {
        console.log(this.titulo);
        console.log(this.autor);
        console.log(this.generoCancion);
    };
    return Cancion;
}());
var disco = new Cancion("Gema", "Ranchera");
disco.setAutor("Vicente Fernandez");
console.log("El autor es: " + disco.getAutor());
console.log("Los datos completos de la canción son: ");
disco.datosCancion();
