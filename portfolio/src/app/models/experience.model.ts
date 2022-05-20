import { Person } from "./person.model";

export class Experience{
    id: String = "";
    title: String = "";
    period: String = "";
    description: String = "";
    person: Person = new Person();

    Constructor(id: String, title: String, period: String, description: String, person: Person) {
        this.id = id;
        this.title = title;
        this.period = period;
        this.description = description;
        this.person = person;
    }
}