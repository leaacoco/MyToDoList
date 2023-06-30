import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/services/authService/auth.service';
import { UserStateService } from 'src/services/Userstate/userstate.service';
import { Observable } from 'rxjs';
import { User } from 'src/models/user/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isLoggedIn$!: Observable<boolean>;
  isAdmin$!: Observable<boolean>;
  currentUser: User | null = null;

  constructor(
    private authService: AuthService,
    private userStateService: UserStateService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.isLoggedIn$ = this.userStateService.isLoggedIn$;
    this.isAdmin$ = this.userStateService.isAdmin$;
    this.authService.getCurrentUser().subscribe(user => {
      this.currentUser = user;
      // Vous pouvez accéder à l'ID de l'utilisateur avec this.currentUser.id
    });
  }

  logout(): void {
    this.authService.logout().subscribe(() => {
      this.router.navigate(['/connexion']);
    });
  }
}
