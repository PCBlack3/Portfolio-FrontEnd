export class Person{
    id : String = "";
    nombre: String = "";
    apellido: String = "";
    urlImagen: String = "";

    Constructor(id: String, nombre: String, apellido: String, urlImagen: String){
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.urlImagen = urlImagen;
    }
}