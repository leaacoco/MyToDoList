import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { User } from 'src/models/user/user';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUser: User | null = null; // Stocke les détails de l'utilisateur connecté
  private apiurl = 'http://localhost:3000/users'; // URL de l'API des utilisateurs

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<User> {
    return this.http.get<User[]>(`${this.apiurl}?email=${email}&password=${password}`).pipe(
      map((users: User[]) => {
        if (users.length > 0) {
          // Informations d'identification valides, enregistrez les détails de l'utilisateur dans le localStorage
          const user = users[0];
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.currentUser = user;
          return user;
        } else {
          // Informations d'identification invalides, échec de la connexion
          throw new Error('Identifiants invalides');
        }
      })
    );
  }
  

  logout(): void {
    localStorage.removeItem('currentUser');
    this.currentUser = null;
  }
  

  isLoggedIn(): boolean {
    // Vérifiez si l'utilisateur est actuellement connecté
    return this.currentUser !== null;
  }

  isAdmin(): boolean {
    // Vérifiez si l'utilisateur actuellement connecté a le rôle administrateur
    const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
    return currentUser.role === 'admin';
  }

  getCurrentUser(): User | null {
    // Renvoie l'utilisateur actuellement connecté
    return this.currentUser;
  }
}
