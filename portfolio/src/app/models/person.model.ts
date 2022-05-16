export class Person{
    id? : number;
    nombre: string = "";
    apellido: string = "";
    urlImagen: string = "";

    Constructor(nombre: string, apellido: string, urlImagen: string){
        this.nombre = nombre;
        this.apellido = apellido;
        this.urlImagen = urlImagen;
    }
}