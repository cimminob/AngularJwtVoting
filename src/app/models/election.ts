export class Election {
    id: number;
    date: String;
    type: String;
    city: String;
    state: String;
    candIds: Array<number>;
    userIds:Array<number>;

    constructor(id: number, date: String, type: String, city: String, state: String, userIds:Array<number>, candIds: Array<number>) {
        this.id=id;
        this.date = date;
        this.type = type;
        this.city = city;
        this.state = state;
        this.userIds=userIds;
        this.candIds=candIds;
    }
}
