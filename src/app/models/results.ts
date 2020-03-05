export class Results {
    electionId:number;
    total : number;
    CandId: number;

    Results(electionId:number, total : number, CandId: number){
        this.total=total;
        this.CandId=CandId;
    }
}