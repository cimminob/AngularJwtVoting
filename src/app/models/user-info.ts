export class UserInfo {
    id : number;
    name : string;
    city : string;
    state : string;
    email : string;

    constructor(id: number, name:string, city:string, state:string, email:string){
        this.id=id;
        this.name=name;
        this.city=city;
        this.state=state;
        this.email=email;
    }   
}