import { Person } from "./person.model";

export class Project{
    id: String = '';
    title: String = "";
    description: String = "";
    urlImage: String = "";
    person: Person = new Person();

    Constructor(id: String, title: String, description: String, urlImage: String, person: Person){
        this.id = id;
        this.title = title;
        this.description = description;
        this.urlImage = urlImage;
        this.person = person;
    }

}