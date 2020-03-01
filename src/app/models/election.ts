export class Election {
    date: String;
    type: String;
    city: String;
    state: String;
    candIds: Array<number>;
    userIds:Array<number>;

    constructor(date: String, type: String, city: String, state: String, userIds:Array<number>, candIds: Array<number>) {
        this.date = date;
        this.type = type;
        this.city = city;
        this.state = state;
        this.userIds=userIds;
        this.candIds=candIds;
    }
}
