import { Component, OnInit } from "@angular/core";
import { ElectionService } from "src/app/services/election.service";
import { UserInfo } from "src/app/models/user-info";
import { Election } from "src/app/models/election";
import { UserService } from "src/app/services/user.service";
import { window } from "rxjs/operators";
// import {UserInfo} from '../../models/user-info';

@Component({
  selector: "app-vote",
  templateUrl: "./vote.component.html",
  styleUrls: ["./vote.component.css"]
})
export class VoteComponent implements OnInit {
  eligibleElections: Election[];
  userId: number;
  user: string;

  constructor(
    private electionService: ElectionService,
    private userService: UserService
  ) {}



  ngOnInit() {
    this.userService.getUserId().subscribe(user => {
      this.userId = parseInt(user);
      console.log(this.userId);
        this.electionService
          .getEligibleElections(this.userId).subscribe(data=>this.eligibleElections=data);
    });
  }

  ngAfterViewInit() {}
}