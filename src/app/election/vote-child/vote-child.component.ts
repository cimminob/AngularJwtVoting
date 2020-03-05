import { Component, OnInit, Input } from '@angular/core';
import { UserInfo } from 'src/app/models/user-info';
import { ElectionService } from 'src/app/services/election.service';
import { Election } from 'src/app/models/election';
import { VoteInfo } from 'src/app/models/vote-info';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-vote-child',
  templateUrl: './vote-child.component.html',
  styleUrls: ['./vote-child.component.css']
})
export class VoteChildComponent implements OnInit {

  isAddVoteSuccessful =false;
  isAddVoteFailed= false;
  errorMessage='';

  candList : UserInfo[];
  radioSel:UserInfo;
  radioSelected:UserInfo;
  radioSelectedString:string;
  voteInfo : VoteInfo;

  @Input() selectedElection: Election;
  @Input() userId:number;

  electionId=this.selectedElection.id;
  constructor(private electionService:ElectionService) { }

  getCandidates():void{
    this.electionService.getCandidatesInElection(this.electionId).subscribe(candList=>this.candList=candList);
   }

   getSelectedCandidate(){
    this.radioSel = this.candList.find(cand => cand == this.radioSelected);
    this.radioSelectedString = JSON.stringify(this.radioSel);
  }
   
   onItemChange(user){
    this.getSelectedCandidate();
  }

   onSubmit(form :NgModel){

     this.voteInfo=new VoteInfo(
       form.value,
       this.electionId,
       this.userId
     );

     this.electionService.addVote(this.electionId, this.voteInfo).subscribe(
       data =>{
         console.log(data),
         this.isAddVoteFailed=false,
         this.isAddVoteSuccessful=true;
       }
     );
     
   }

  ngOnInit() {
  }

}
