import { Component, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserServiceService } from 'src/services/userService/user-service.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent {
    idUser: any;
    userForm: FormGroup;

    constructor(private route: ActivatedRoute, 
      private Router: Router,
      @Inject(FormBuilder) private formBuilder: FormBuilder,
      private us :UserServiceService){
        this.userForm = this.formBuilder.group({
            nom: new FormControl(""),
            prenom: new FormControl(""),
            role: new FormControl(""),
            email: new FormControl(""),
        })
        this.idUser = "";
    }
    ngOnInit(): void {
      this.idUser = this.route.snapshot.paramMap.get("id");
      this.us.getUserById(this.idUser).subscribe((userdata : any) => {
        this.userForm = this.formBuilder.group({
          nom: new FormControl(userdata.nom),
          prenom: new FormControl(userdata.lastname),
          role: new FormControl(userdata.email),
          email: new FormControl(userdata.role)
      })
    }

}
