abstract class Persona{
     nombre: string;
     apellido: string;
     direccion: string;
     telefono: string;
     edad: number;

    constructor(nomParam:string, apeParam:string,dirParam:string,telParam:string,edadParam:number) {
        this.nombre = nomParam;
        this.apellido = apeParam;
        this.direccion = dirParam;
        this.telefono = telParam;
        this.edad = edadParam;
    }

    mayorEdad(edadParam:number){
        if (edadParam < 18){
            console.log("La persona es menor de edad. Tiene " + edadParam + " años de edad");
        }
        else{
            console.log("La persona es mayor de edad. Tiene " + edadParam + " años de edad");
        }
    }

    abstract datosPersonales(): string;

}// Fin de la clase abstracta



class Empleado extends Persona{
    private sueldo: number;
    
    constructor(nomParam:string, apeParam:string, dirParam:string, telParam:string,edadParam:number, sueldoParam:number){
        super(nomParam, apeParam, dirParam, telParam, edadParam);
        this.sueldo = sueldoParam;
    }

    datosPersonales():any{
        console.log("El nombre del empleado es: " + this.nombre);
        console.log("El apellido del empleado es: " + this.apellido);
        console.log("La dirección del empleado es: " + this.direccion);
        console.log("El telefono del empleado es: " + this.telefono);
        console.log("La edad del empleado es: " + this.edad + " años");
        console.log("El sueldo del empleado es: " + "$" + this.sueldo);
        
    }

    cargarSueldo(sueldoParam){
        this.sueldo = sueldoParam;
    }
    
    imprimirSueldo(){
        return this.sueldo;
    }
}// fin de la clase Empleado

let trabajador = new Empleado ("Erick", "Amaya","Planes de Renderos","22225555",34,500);

//console.log(trabajador.datosPersonales());
trabajador.datosPersonales()
console.log("El Saldario del empleado es: " + "$" + trabajador.imprimirSueldo());
 
