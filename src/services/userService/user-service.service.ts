import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User, Task } from 'src/models/user/user';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  private apiurl = 'http://127.0.0.1:8000/users';
  private headers = new HttpHeaders({
    'Content-Type': 'application/ld+json' // ou 'application/json' si vous préférez ce format
  });

  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<User[]> {
    return new Observable<User[]>((observer) => {
      this.httpClient.get(`${this.apiurl}`).subscribe(
        (result: any) => {
          const usersData = result['hydra:member']; // Ciblez la clé "hydra:member"
          const users: User[] = [];
          for (const jsonUser of usersData) {
            const user = new User();
            user.loadFromJson(jsonUser);
            users.push(user);
          }
          observer.next(users);
          observer.complete();
        },
        (error) => {
          observer.error(error);
          observer.complete();
        }
      );
    });
}



  createUser(user: any): Observable<User> {
    return this.httpClient.post<User>(`${this.apiurl}`, user, { headers: this.headers });
  }

  updateUser(id: string, data: any): Observable<User> {
    return this.httpClient.put<User>(`${this.apiurl}/${id}`, data, { headers: this.headers });
  }

  getUserById(id: string | null): Observable<User> {
    return this.httpClient.get<User>(`${this.apiurl}/${id}`);
  }

  deleteUserById(id: number): Observable<any> {
    return this.httpClient.delete(`${this.apiurl}/${id}`);
  }
}
