import { Component } from '@angular/core';

@Component({
  selector: 'app-user-delete',
  templateUrl: './user-delete.component.html',
  styleUrls: ['./user-delete.component.css']
})
export class UserDeleteComponent {
  id !: any;
  constructor(private route : ActivatedRoute, private router : Router, private us : UserServiceService, private httpclient : HttpClient){}

    ngOnInit(): void {
      this.id = this.route.snapshot.paramMap.get("id")
      this.us.deleteUserById(this.id)
      this.router.navigate(['/users'])
}
}
