import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { ElectionInfo } from '../models/election-info';
import { Election } from '../models/election';
import { MessageService } from './message.service';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

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
    addElection(info: ElectionInfo): Observable<string>{
      return this.http.post<string>(this.addElectionUrl, info, httpOptions)
    }

    getElection():Observable<Election[]>{
      return this.http.get<Election[]>(this.getElectionsUrl);
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
