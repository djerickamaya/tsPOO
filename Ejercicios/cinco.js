var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Persona = /** @class */ (function () {
    function Persona(nomParam, apeParam, dirParam, telParam, edadParam) {
        this.nombre = nomParam;
        this.apellido = apeParam;
        this.direccion = dirParam;
        this.telefono = telParam;
        this.edad = edadParam;
    }
    Persona.prototype.mayorEdad = function (edadParam) {
        if (edadParam < 18) {
            console.log("La persona es menor de edad. Tiene " + edadParam + " años de edad");
        }
        else {
            console.log("La persona es mayor de edad. Tiene " + edadParam + " años de edad");
        }
    };
    return Persona;
}()); // Fin de la clase abstracta
var Empleado = /** @class */ (function (_super) {
    __extends(Empleado, _super);
    function Empleado(nomParam, apeParam, dirParam, telParam, edadParam, sueldoParam) {
        var _this = _super.call(this, nomParam, apeParam, dirParam, telParam, edadParam) || this;
        _this.sueldo = sueldoParam;
        return _this;
    }
    Empleado.prototype.datosPersonales = function () {
        console.log("El nombre del empleado es: " + this.nombre);
        console.log("El apellido del empleado es: " + this.apellido);
        console.log("La dirección del empleado es: " + this.direccion);
        console.log("El telefono del empleado es: " + this.telefono);
        console.log("La edad del empleado es: " + this.edad + " años");
        console.log("El sueldo del empleado es: " + "$" + this.sueldo);
    };
    Empleado.prototype.cargarSueldo = function (sueldoParam) {
        this.sueldo = sueldoParam;
    };
    Empleado.prototype.imprimirSueldo = function () {
        return this.sueldo;
    };
    return Empleado;
}(Persona)); // fin de la clase Empleado
var trabajador = new Empleado("Erick", "Amaya", "Planes de Renderos", "22225555", 34, 500);
//console.log(trabajador.datosPersonales());
trabajador.datosPersonales();
console.log("El Saldario del empleado es: " + "$" + trabajador.imprimirSueldo());
