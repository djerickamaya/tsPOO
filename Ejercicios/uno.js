var CabeceraPag = /** @class */ (function () {
    function CabeceraPag(tituloParam, colorParam, fuenteParam, alinearParam) {
        this.titulo = tituloParam;
        this.color = colorParam;
        this.fuente = fuenteParam;
        this.alinear = alinearParam;
    }
    //METODOS GET
    CabeceraPag.prototype.getTitulo = function () {
        return this.titulo;
    };
    CabeceraPag.prototype.getColor = function () {
        return this.color;
    };
    CabeceraPag.prototype.getFuente = function () {
        return this.fuente;
    };
    CabeceraPag.prototype.getAlinear = function () {
        return this.alinear;
    };
    //METODOS SET 
    CabeceraPag.prototype.setTitulo = function (tituloParam) {
        this.titulo = tituloParam;
    };
    CabeceraPag.prototype.setColor = function (colorParam) {
        this.color = colorParam;
    };
    CabeceraPag.prototype.setFuente = function (fuenteParam) {
        this.fuente = fuenteParam;
    };
    CabeceraPag.prototype.setAlinear = function (alinearParam) {
        this.alinear = alinearParam;
    };
    CabeceraPag.prototype.cabecera = function () {
        console.log(this.titulo);
        console.log(this.color);
        console.log(this.fuente);
    };
    CabeceraPag.prototype.imprTodosParametros = function () {
        console.log(this.titulo);
        console.log(this.color);
        console.log(this.fuente);
        console.log(this.alinear);
    };
    return CabeceraPag;
}()); //fin de la clase
var pagina = new CabeceraPag("Mi pagina", "Azul", "Arial", "Centrado");
pagina.cabecera();
pagina.setAlinear("Izquierda");
console.log(pagina.getAlinear());
pagina.imprTodosParametros();
