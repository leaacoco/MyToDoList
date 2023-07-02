import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from 'src/models/user/user';
import { UserStateService } from '../Userstate/userstate.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiurl = 'http://localhost:3000';

  constructor(private http: HttpClient, private userStateService: UserStateService) {}

  login(email: string, password: string): Observable<User> {
    return this.http.post<User>(`${this.apiurl}/login`, { email, password }, { withCredentials: true })
      .pipe(
        map((user: User) => {
          console.log('Utilisateur connecté :', user.role);
          this.userStateService.setLoggedIn(true);
          this.userStateService.setIsAdmin(user.role === 'admin');
          return user;
        })
      );
  }
  
  
  

  logout(): Observable<void> {
    this.userStateService.setLoggedIn(false);
    this.userStateService.setIsAdmin(false);
    return this.http.post<void>(`${this.apiurl}/logout`, {});
  }

  isLoggedIn(): Observable<boolean> {
    return this.userStateService.isLoggedIn$;
  }

  isAdmin(): Observable<boolean> {
    return this.userStateService.isAdmin$;
  }


  getCurrentUser(): Observable<User | null> {
    const url = `${this.apiurl}/currentuser`
    const obj = this.http.get<User | null>(url)
    console.log(obj)
    return obj;
  }


}
