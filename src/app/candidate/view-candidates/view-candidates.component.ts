import { Component, OnInit } from '@angular/core';
import { UserInfo } from 'src/app/models/user-info';
import { ElectionService } from 'src/app/services/election.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-view-candidates',
  templateUrl: './view-candidates.component.html',
  styleUrls: ['./view-candidates.component.css']
})
export class ViewCandidatesComponent implements OnInit {

  candidates:UserInfo[];  
  electionId:number;

  constructor(private electionService:ElectionService) { }


  onSubmit(form:NgForm){ 
    console.log(form.value.electionId);
      this.electionService.getCandidatesInElection(form.value.electionId).subscribe(candidates=>this.candidates=candidates);
  }

  ngOnInit() {

  }

}
