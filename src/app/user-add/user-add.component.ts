import { Component } from '@angular/core';
import { User } from 'src/models/user/user';
import { UserServiceService } from 'src/services/userService/user-service.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})

export class UserAddComponent {
  newUser: User = new User()
  constructor(private us: UserServiceService){}

  adduser(){
    this.us.createUser(this.newUser).subscribe(
      Response => {
        console.log("ça marche", Response)
      this.newUser = new User()
    },
    error => {
      console.log("ça marche aps")
    }
    )
  }
}
