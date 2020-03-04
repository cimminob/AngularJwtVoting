import {Component, OnInit } from '@angular/core';
import {ElectionService} from '../../services/election.service';
import {ElectionInfo} from '../../models/election-info';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-create-election',
  templateUrl: './create-election.component.html',
  styleUrls: ['./create-election.component.css']
})
export class CreateElectionComponent implements OnInit {

  electionInfo: ElectionInfo;
  errorMessage = '';
  isCreateElectionFailed = false;
  isCreateElectionSuccessful=false;

  ngOnInit(): void {}

  onSubmit(form: NgModel){
    console.log(form.value.date);

    this.electionInfo = new ElectionInfo(
      form.value.date,
      form.value.type,
      form.value.city,
      form.value.state,
    );

  let res =    this.electionService.addElection(this.electionInfo);
  
   res.subscribe(
      data => {
      console.log(data);
      this.isCreateElectionFailed=false;
      this.isCreateElectionSuccessful = true;
    }
      
    );
  };
  
  constructor(private electionService: ElectionService ){};
}
