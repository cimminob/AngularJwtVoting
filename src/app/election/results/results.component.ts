import { Component, OnInit } from '@angular/core';
import { ElectionService } from 'src/app/services/election.service';
import { Results } from 'src/app/models/results';
import { Election } from 'src/app/models/election';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  elections: Election[];
  results:Results[];

  constructor(private electionService: ElectionService) { 

  }



  getElections():void{
    this.electionService.getElections().subscribe(elections=>this.elections=elections);
  }

  ngOnInit() {
    this.getElections();
  }

}
