import { Component, OnInit, Input } from '@angular/core';
import { ElectionService } from 'src/app/services/election.service';
import { Results } from 'src/app/models/results';
import { Election } from 'src/app/models/election';

@Component({
  selector: 'app-results-child',
  templateUrl: './results-child.component.html',
  styleUrls: ['./results-child.component.css']
})
export class ResultsChildComponent implements OnInit {



  results:Results[];
  @Input() election:Election;
  constructor(private electionService:ElectionService) { 

  }

  
  getElectionResults(id:number):void{
    this.electionService.getElectionResults(id).subscribe(resultsReturned=>this.results=resultsReturned);
  }

  ngOnInit() {
    this.getElectionResults(this.election.id);
  }

}
