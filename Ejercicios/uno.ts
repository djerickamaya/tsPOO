class CabeceraPag{
    private titulo: string;
    private color: string;
    private fuente: string;
    private alinear: string;

    constructor(tituloParam: string, colorParam:string, fuenteParam:string, alinearParam:string){
        this.titulo = tituloParam;
        this.color = colorParam;
        this.fuente = fuenteParam;
        this.alinear = alinearParam;
    }
//METODOS GET
    getTitulo():string{
        return this.titulo;
    }
    getColor():string{
        return this.color;
    }
    getFuente():string{
        return this.fuente;
    }
    getAlinear():string{
        return this.alinear;
    }
//METODOS SET 
    setTitulo(tituloParam:string){
        this.titulo = tituloParam;
    }
    setColor(colorParam:string){
        this.color = colorParam;
    }
    setFuente(fuenteParam:string){
        this.fuente = fuenteParam;
    }
    setAlinear(alinearParam:string){
        this.alinear = alinearParam;
    }

    cabecera(){
        console.log(this.titulo);
        console.log(this.color);
        console.log(this.fuente);
        
    }

    imprTodosParametros(){
        console.log(this.titulo);
        console.log(this.color);
        console.log(this.fuente);
        console.log(this.alinear);
        
    }
   
}//fin de la clase

//pasa los paramentos para instanciar el objeto
 let pagina = new CabeceraPag("Mi pagina","Azul","Arial","Centrado");

 //usa el metodo para obtener el titulo, color y fuente
 pagina.cabecera();

 //usa el metodo setAlinear para indicarle como queire alinear el titulo
 pagina.setAlinear("Izquierda");
 console.log(pagina.getAlinear());

 //usa el metodo para imprimir todos los parametros
 pagina.imprTodosParametros();
  
 

