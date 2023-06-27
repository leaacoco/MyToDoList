import { Component } from '@angular/core';
import { User } from 'src/models/user/user';
import { UserServiceService } from 'src/services/userService/user-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent {
  newUser: User = new User();
  confirmPassword: string = '';
  showPasswordRequirements: boolean = false;

  constructor(private us: UserServiceService, private router: Router) {}

  adduser() {
    this.us.createUser(this.newUser).subscribe(
      Response => {
        console.log("ça marche", Response);
        this.newUser = new User();
        this.router.navigate(['/users']); // Redirection vers '/users'
      },
      error => {
        console.log("ça marche pas");
      }
    );
  }
  

  // Méthodes de validation des règles de mot de passe
  isPasswordLengthValid() {
    if (this.newUser.password?.length != undefined )
    {
      return this.newUser.password?.length >= 8;
    }
    else{
      return undefined
    }
  }

  isPasswordContainsUppercase() {
    return /[A-Z]/.test(this.newUser.password ?? '');
  }

  isPasswordContainsLowercase() {
    return /[a-z]/.test(this.newUser.password ?? '');
  }

  isPasswordContainsNumber() {
    return /[0-9]/.test(this.newUser.password ?? '');
  }

  isPasswordContainsSpecialCharacter() {
    return /[!@#$%^&*]/.test(this.newUser.password ?? '');
  }

  passwordsMatch() {
    return this.newUser.password !== this.confirmPassword;
  }

  isPasswordValid() {
    return (
      this.isPasswordLengthValid() &&
      this.isPasswordContainsUppercase() &&
      this.isPasswordContainsLowercase() &&
      this.isPasswordContainsNumber() &&
      this.isPasswordContainsSpecialCharacter() &&
      !this.passwordsMatch()
    );
  }
}
