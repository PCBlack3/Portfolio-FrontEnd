export class Experience{
    id?: Number;
    title: String = "";
    period: String = "";
    description: String = "";

    Constructor(title: String, period: String, description: String){
        this.title = title;
        this.period = period;
        this.description = description;
    }
}