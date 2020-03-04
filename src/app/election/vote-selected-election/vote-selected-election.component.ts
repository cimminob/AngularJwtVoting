import { Component, OnInit, Input } from '@angular/core';
import { Election } from 'src/app/models/election';
import { ElectionService } from 'src/app/services/election.service';
import { UserInfo } from 'src/app/models/user-info';

@Component({
  selector: 'app-vote-selected-election',
  templateUrl: './vote-selected-election.component.html',
  styleUrls: ['./vote-selected-election.component.css']
})
export class VoteSelectedElectionComponent implements OnInit {

  candList : UserInfo[];

  @Input() selectedElection: Election;

  electionId=this.selectedElection.id;
  constructor(private electionService:ElectionService) { }

  getCandidates():void{
    this.electionService.getCandidates(this.electionId).subscribe(candList=>this.candList=candList);
   }

   onSubmit(){
     
   }

  ngOnInit() {
  }

}
