import { Component, OnInit } from '@angular/core';
import { ElectionService } from 'src/app/services/election.service';
import { Election } from 'src/app/models/election';

@Component({
  selector: 'app-view-elections',
  templateUrl: './view-elections.component.html',
  styleUrls: ['./view-elections.component.css']
})
export class ViewElectionsComponent implements OnInit {

  elections:Election[];

  constructor(private electionService:ElectionService) { }

  getElections():void {
    this.electionService.getElections().subscribe(elections=>this.elections=elections);
  }

  ngOnInit(): void {
    this.getElections();
  }

}
