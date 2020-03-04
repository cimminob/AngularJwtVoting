import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { ElectionInfo } from '../models/election-info';
import { Election } from '../models/election';
import { MessageService } from './message.service';
import { catchError, map, tap } from 'rxjs/operators';
import { Token } from '@angular/compiler';
import { UserInfo } from '../models/user-info';
import { VoteInfo } from '../models/vote-info';


@Injectable({
  providedIn: 'root'
})
export class ElectionService {

  private addElectionUrl = 'http://localhost:8080/election';
  private getElectionsUrl = 'http://localhost:8080/elections';

 

  constructor(private http: HttpClient,  private messageService: MessageService) {
  }
  //   signUp(info: SignUpInfo): Observable<string> {
  //   return this.http.post<string>(this.signupUrl, info, httpOptions);
  // }

  // const token = sessionStorage.getItem('AuthToken');
  // const httpOptions = {
  //     headers: new HttpHeaders({ Authorization : token })
    
  //   };

    addVote(electionId:number, info:VoteInfo){
      const addVoteUrl=`/election/${electionId}/vote`;
      return this.http.post(addVoteUrl, info);
    }

    addElection(info: ElectionInfo){
      return this.http.post(this.addElectionUrl, info);
    }

    addCandidate(electionId: number, userId: number){
       const addCandidateUrl  = `http://localhost:8000/${electionId}/${userId}`;
      return this.http.post(addCandidateUrl, null);
    }

    getCandidates(electionId: number):Observable<UserInfo[]>{
      const getCandidatesUrl=`http://localhost:8080/election/${electionId}/candidates`;
      return this.http.get<UserInfo[]>(getCandidatesUrl);
    }


    getEligibleElections(userId: number):Observable<Election[]>{
      const getEligibleElectionsUrl=`/election/elections_user_can_vote_in/${userId}`;
      return this.http.get<Election[]>(getEligibleElectionsUrl);
    }

    getElections():Observable<Election[]>{
      return this.http.get<Election[]>(this.getElectionsUrl)
    }

    private log(message: string) {
      this.messageService.add(`ElectionService: ${message}`);
    }

    private handleError<T> (operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {
    
        // TODO: send the error to remote logging infrastructure
        console.error(error); // log to console instead
    
        // TODO: better job of transforming error for user consumption
        this.log(`${operation} failed: ${error.message}`);
    
        // Let the app keep running by returning an empty result.
        return of(result as T);
      };
    }
}
