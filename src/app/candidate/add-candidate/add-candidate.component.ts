import { Component, OnInit } from '@angular/core';
import { ElectionService } from 'src/app/services/election.service';

@Component({
  selector: 'app-add-candidate',
  templateUrl: './add-candidate.component.html',
  styleUrls: ['./add-candidate.component.css']
})
export class AddCandidateComponent implements OnInit {

  isAddCandidateSuccessful =false;
  isAddCandidateFailed= false;
  errorMessage='';
  electionId : number;
  userId : number;
    
  show=false;

  constructor(private electionService : ElectionService) { }

  ngOnInit() {
  }

  onSubmit(){
    this.electionService.addCandidate(this.electionId, this.userId).subscribe(
      data=>{
        console.log(data); 
        this.isAddCandidateFailed=false;
        this.isAddCandidateSuccessful=true;
      
      }
    )

  }

}
