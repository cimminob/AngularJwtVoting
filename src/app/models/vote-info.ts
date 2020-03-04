class VoteInfo {
    Id: number;
    candId:number;
    electionId:number;
    voterId:number;

    constructor(Id:number, candId:number, electionId:number, voterId:number){
        this.Id=Id;
        this.candId=candId;
        this.electionId=electionId;
        this.voterId=voterId;
    }
}