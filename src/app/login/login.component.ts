import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/services/authService/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  error: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  login() {
    this.authService.login(this.username, this.password)
      .subscribe(
        () => {
          // Connexion réussie, redirigez l'utilisateur vers la route '/taches'
          this.router.navigate(['/taches']);
        },
        (error: any) => {
          console.log(error);
          this.error = 'Identifiant ou mot de passe incorrect.';
        }
      );
  }
}
