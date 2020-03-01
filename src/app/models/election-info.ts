export class ElectionInfo {
    date: String;
    type: String;
    city: String;
    state: String;

    constructor(date: String, type: String, city: String, state: String) {
        this.date = date;
        this.type = type;
        this.city = city;
        this.state = state;
    }
}
