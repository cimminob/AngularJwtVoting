import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenStorageService } from '../auth/token-storage.service';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userUrl = 'http://localhost:8080/api/test/user';
  private candUrl = 'http://localhost:8080/api/test/candidate';
  private adminUrl = 'http://localhost:8080/api/test/admin';


  constructor(private http: HttpClient, private tokenService:TokenStorageService) { }

  getUserName():string{
    return this.tokenService.getUsername();
  }
  
  
  getUserId():Observable<string>{
    return this.http.get(`http://localhost:8080/user/${this.getUserName()}`, {responseType: 'text'});
  }

  getUserBoard(): Observable<string> {
    return this.http.get(this.userUrl, { responseType: 'text' });
  }

  getCandBoard(): Observable<string> {
    return this.http.get(this.candUrl, { responseType: 'text' });
  }

  getAdminBoard(): Observable<string> {
    return this.http.get(this.adminUrl, { responseType: 'text' });
  }
}
