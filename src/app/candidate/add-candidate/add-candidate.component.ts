import { Component, OnInit } from '@angular/core';
import { ElectionService } from 'src/app/services/election.service';
import { NgForm } from '@angular/forms';

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
    
  constructor(private electionService : ElectionService) { }

  ngOnInit() {
  }
  
  isShow = false;
 
  toggleDisplay() {
    this.isShow = !this.isShow;
  }

  onSubmit(form: NgForm){
    
    this.electionService.addCandidate(form.value.electionId, form.value.userId).subscribe(
      data=>{
        console.log(data); 
        this.isAddCandidateFailed=false;
        this.isAddCandidateSuccessful=true;
      }
    )
  }

}
