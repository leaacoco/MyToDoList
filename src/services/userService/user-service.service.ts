import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { User } from 'src/models/user/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  private apiurl = "http://localhost:3000/users"
  constructor(
    private httpclient : HttpClient
  ) {}
    getAll() {
      return new Observable<User[]>((observer) => {
        this.httpclient.get('http://localhost:3000/users', { withCredentials: true }).subscribe(
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
    createUser(user: any) {
      return this.httpclient.post('http://localhost:3000/users', user);
    }
  
    updateUser(id: string, data: any) {
      return this.httpclient.put(`${this.apiurl}/${id}`, data);
    }
  
    getUserById(id: string | null) {
      return this.httpclient.get(`${this.apiurl}/${id}`);
    }
  
  deleteUserById(id: number){
    // Envoie une requête DELETE à l'URL http://localhost:3000/users/{id} pour supprimer l'employé
    this.httpclient.delete(`http://localhost:3000/users/${id}`).subscribe();
  }
   
   
}
