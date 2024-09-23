var Calculadora = /** @class */ (function () {
    function Calculadora(n1Param, n2Param, nBaseParam, nExpoParam, nFactorParam) {
        this.n1 = n1Param;
        this.n2 = n2Param;
        this.nBase = nBaseParam;
        this.nExpo = nExpoParam;
        this.nFactor = nFactorParam;
    }
    Calculadora.prototype.sumar = function (n1Param, n2Param) {
        var suma = n1Param + n2Param;
        return suma;
    };
    Calculadora.prototype.restar = function (n1Param, n2Param) {
        var resta = n1Param - n2Param;
        return resta;
    };
    Calculadora.prototype.multiplicar = function (n1Param, n2Param) {
        var multi = n1Param * n2Param;
        return multi;
    };
    Calculadora.prototype.dividir = function (n1Param, n2Param) {
        var div = n1Param / n2Param;
        return div;
    };
    Calculadora.prototype.potencia = function (nBaseParam, nExpoParam) {
        var potencia = Math.pow(nBaseParam, nExpoParam);
        return potencia;
    };
    Calculadora.prototype.factorial = function (nFactorParam) {
        if (nFactorParam === 0 || nFactorParam === 1)
            return 1;
        for (var i = nFactorParam - 1; i >= 1; i--) {
            nFactorParam *= i;
        }
        return nFactorParam;
    };
    return Calculadora;
}());
var operar = new Calculadora(2, 4, 6, 8, 3);
console.log(operar.sumar(3, 5));
console.log(operar.dividir(6, 2));
console.log(operar.multiplicar(4, 5));
console.log(operar.restar(8, 5));
console.log(operar.factorial(5));
console.log(operar.potencia(2, 3));
