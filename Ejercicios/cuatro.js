var Cuenta = /** @class */ (function () {
    function Cuenta(nombreParam, cantidadParam, tipoCtaParam, numCtaParam) {
        this.nombre = nombreParam;
        this.cantidad = cantidadParam;
        this.tipoCta = tipoCtaParam;
        this.numCta = numCtaParam;
    }
    Cuenta.prototype.depositar = function () {
        if (this.cantidad < 5) {
            console.log("El valor a depositar debe ser mayor a $5.00");
        }
        else {
            console.log("Su deposito fue exitoso, por la cantidad de: " + "$" + this.cantidad);
        }
    };
    Cuenta.prototype.retirar = function (valorParam) {
        if (valorParam > this.cantidad) {
            console.log("El valor que desea retirar es mayor a lo que tiene en su cuenta");
        }
        else {
            this.cantidad = this.cantidad - valorParam;
            console.log("Usted ha retirado: " + "$" + valorParam + "  Su saldo actual es: " + "$" + this.cantidad);
        }
    };
    Cuenta.prototype.datosCta = function () {
        console.log("El usuario de la cueta es: " + this.nombre);
        console.log("El tipo de cuenta es: " + this.tipoCta);
        console.log("El # de cuenta es: " + this.numCta);
    };
    return Cuenta;
}());
var miCuenta = new Cuenta("Erick Amaya", 100, "Ahorro", "0002-4364-22394");
miCuenta.depositar();
miCuenta.retirar(30);
miCuenta.datosCta();
