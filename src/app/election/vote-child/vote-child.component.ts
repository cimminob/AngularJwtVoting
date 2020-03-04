import { Component, OnInit, Input } from '@angular/core';
import { UserInfo } from 'src/app/models/user-info';
import { ElectionService } from 'src/app/services/election.service';
import { Election } from 'src/app/models/election';

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

  @Input() selectedElection: Election;
  @Input() userId:number;

  electionId=this.selectedElection.id;
  constructor(private electionService:ElectionService) { }

  getCandidates():void{
    this.electionService.getCandidates(this.electionId).subscribe(candList=>this.candList=candList);
   }

   
   getSelectedCandidate(){
    this.radioSel = this.candList.find(cand => cand == this.radioSelected);
    this.radioSelectedString = JSON.stringify(this.radioSel);
  }
   
   onItemChange(user){
    this.getSelectedCandidate();
  }


  
  // onSubmit(){
  //   this.electionService.addCandidate(this.electionId, this.userId).subscribe(
  //     data=>{
  //       console.log(data); 
  //       this.isAddCandidateFailed=false;
  //       this.isAddCandidateSuccessful=true;
      
  //     }
  //   )

  // }


   onSubmit(){
     
   }

  ngOnInit() {
  }

}
