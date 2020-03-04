export class VoteInfo {
    candId:number;
    electionId:number;
    voterId:number;

    constructor(candId:number, electionId:number, voterId:number){
        this.candId=candId;
        this.electionId=electionId;
        this.voterId=voterId;
    }
}