import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User, Task } from 'src/models/user/user';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  private apiurl = 'http://localhost:3000/users';

  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<User[]> {
    return new Observable<User[]>((observer) => {
      this.httpClient.get(`${this.apiurl}`, { withCredentials: true }).subscribe(
        (result: any) => {
          const users: User[] = [];
          for (const jsonUser of result) {
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
    return this.httpClient.post<User>(`${this.apiurl}`, user);
  }

  updateUser(id: string, data: any): Observable<User> {
    return this.httpClient.put<User>(`${this.apiurl}/${id}`, data);
  }

  getUserById(id: string | null): Observable<User> {
    return this.httpClient.get<User>(`${this.apiurl}/${id}`);
  }

  deleteUserById(id: number): Observable<any> {
    return this.httpClient.delete(`${this.apiurl}/${id}`);
  }
}
