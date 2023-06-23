import { Component } from '@angular/core';
import { User } from 'src/models/user/user';
import { UserServiceService } from 'src/services/userService/user-service.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  userArray : User[] = []

    constructor(private us : UserServiceService){}  
    ngOnInit():void {
      this.us.getAll().subscribe(UserList => {

        this.userArray = UserList
        console.log(this.userArray)
      })
    }


    }







