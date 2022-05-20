import { Person } from "./person.model";

export class Education{
    id : String = "";
    title:String = "";
    description:String = "";
    person: Person = new Person();

    Constructor(id: String, title:String, description:String, person: Person){
        this.id = id;
        this.title = title;
        this.description = description;
        this.person = person;

    }






}