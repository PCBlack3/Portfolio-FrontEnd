export class Project{
    id?: Number;
    title: String = "";
    description: String = "";
    urlImage: String = "";

    Constructor(title: String, description: String, urlImage: String){
        this.title = title;
        this.description = description;
        this.urlImage = urlImage;
    }

}