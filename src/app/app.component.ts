import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserServiceService } from 'src/services/userService/user-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  id !: any;
  constructor(private route : ActivatedRoute, private router : Router, private us : UserServiceService, private httpclient : HttpClient){}

    ngOnInit(): void {
      this.id = this.route.snapshot.paramMap.get("id")
      this.us.deleteUserById(this.id)
      this.router.navigate(['/user'])
    }
}
