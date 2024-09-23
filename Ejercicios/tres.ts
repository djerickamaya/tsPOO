class Cancion{
    private titulo: string;
    private generoCancion: string;
    private autor: string;

    constructor(tituloParam:string,generoCancionParam:string,){
        this.titulo = tituloParam;
        this.generoCancion = generoCancionParam;
    }

    getAutor(){
        return this.autor;
    }

    setAutor(autorParam:string){
        this.autor = autorParam;
    }

    datosCancion(){
        console.log(this.titulo);
        console.log(this.autor);
        console.log(this.generoCancion);
        
    }

}

let disco = new Cancion("Gema","Ranchera");

disco.setAutor("Vicente Fernandez")
console.log("El autor es: " + disco.getAutor());


console.log("Los datos completos de la canción son: " );
disco.datosCancion();

 