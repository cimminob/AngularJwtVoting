import { Component, OnInit } from '@angular/core';
import { ElectionService } from 'src/app/services/election.service';
import { UserInfo } from 'src/app/models/user-info';
import { Election } from 'src/app/models/election';
import { UserService } from 'src/app/services/user.service';
// import {UserInfo} from '../../models/user-info';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {

  eligibleElections: Election[];
  userId:number;

  constructor(private electionService:ElectionService, private userService:UserService) {}

   getEligibleElections():void{
     this.userService.getUserId().subscribe(user=>this.userId=parseInt(user));
     this.electionService.getEligibleElections(this.userId).subscribe(electionList=>this.eligibleElections=electionList);
   }


  ngOnInit() {
  }

}
