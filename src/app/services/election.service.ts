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
import { Results } from '../models/results';


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
      const addVoteUrl='http://localhost:8080/election/'+electionId+'/vote';
      return this.http.post(addVoteUrl, info);
    }

    addElection(info: ElectionInfo){  
      return this.http.post(this.addElectionUrl, info);
    }

    addCandidate(electionId: number, userId: number){
       const userInfo = new UserInfo(null, null, null, null, null);
       const addCandidateUrl  = 'http://localhost:8080/election/'+electionId+'/'+userId;
       console.log(addCandidateUrl);  
       return this.http.post(addCandidateUrl, null);
    }

    getCandidatesInElection(electionId: number):Observable<UserInfo[]>{
      console.log("election id is "+electionId);
      const getCandidatesUrl = `http://localhost:8080/election/${electionId}/candidates`;
      console.log(getCandidatesUrl);
      return this.http.get<UserInfo[]>(getCandidatesUrl);
      //  return this.http.get<UserInfo[]>('http://localhost:8080/election/1/candidates');
    }

    getEligibleElections(userId: number):Observable<Election[]>{
      const getEligibleElectionsUrl='http://localhost:8080/election/elections_user_can_vote_in/'+userId;
      let res = this.http.get<Election[]>(getEligibleElectionsUrl);
      res.subscribe(data=>console.log(data));
      return res;
    }

    getElectionResults(electionId:number):Observable<Results[]>{
      const getElectionResultsUrl='http://localhost:8080/election/'+electionId+'/results';
      return this.http.get<Results[]>(getElectionResultsUrl);
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
