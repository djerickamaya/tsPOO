class Calculadora{

    private n1: number;
    private n2: number;
    private nBase: number;
    private nExpo: number;
    private nFactor: number;

    constructor(n1Param:number,n2Param:number,nBaseParam:number,nExpoParam:number,nFactorParam:number){
        this.n1 = n1Param;
        this.n2 = n2Param;
        this.nBase = nBaseParam;
        this.nExpo = nExpoParam;
        this.nFactor = nFactorParam;
    }

    sumar(n1Param:number, n2Param:number){
        let suma = n1Param + n2Param;
        return suma;
    }
    
    restar(n1Param:number,n2Param:number){
        let resta = n1Param - n2Param;
        return resta;
    }
    multiplicar(n1Param:number,n2Param:number){
        let multi = n1Param * n2Param;
        return multi;
    }
    dividir(n1Param:number,n2Param:number){
        let div = n1Param / n2Param;
        return div;
    }
    potencia(nBaseParam:number,nExpoParam:number){
        let potencia = Math.pow(nBaseParam,nExpoParam);
        return potencia;
    }
    factorial(nFactorParam:number){
        if (nFactorParam === 0 || nFactorParam === 1)
            return 1;
          for (var i = nFactorParam - 1; i >= 1; i--) {
            nFactorParam *= i;
          }
          return nFactorParam;
    }

}

let operar = new Calculadora(2,4,6,8,3);

console.log(operar.sumar(3,5));
console.log(operar.dividir(6,2));
console.log(operar.multiplicar(4,5));
console.log(operar.restar(8,5));
console.log(operar.factorial(5));
console.log(operar.potencia(2,3));




