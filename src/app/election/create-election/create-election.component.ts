import {Component, OnInit } from '@angular/core';
import {ElectionService} from '../../services/election.service';
import {ElectionInfo} from '../../models/election-info';

@Component({
  selector: 'app-create-election',
  templateUrl: './create-election.component.html',
  styleUrls: ['./create-election.component.css']
})
export class CreateElectionComponent implements OnInit {

  form: any = {};
  electionInfo: ElectionInfo;
  errorMessage = '';
  isCreateElectionFailed = false;
  isCreateElectionSuccessful=true;

  ngOnInit(): void {}

  onSubmit(){
    console.log(this.form);

    this.electionInfo = new ElectionInfo(
      this.form.date,
      this.form.type,
      this.form.city,
      this.form.state,
    );

    this.electionService.addElection(this.electionInfo).subscribe(
      data => {
      console.log(data);
      this.isCreateElectionFailed=false;
      this.isCreateElectionSuccessful = true;
    },
      error => {
        console.log(error);
        this.errorMessage = error.error.message;
        this.isCreateElectionFailed = true;
        this.isCreateElectionSuccessful = false;
      } 
    );
  };
  
  constructor(private electionService: ElectionService ){};
}
