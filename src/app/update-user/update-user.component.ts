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

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private userService: UserServiceService
  ) {
    this.userForm = this.formBuilder.group({
      nom: new FormControl(''),
      prenom: new FormControl(''),
      role: new FormControl(''),
      email: new FormControl('')
    });
    this.idUser = '';
  }

  ngOnInit(): void {
    this.idUser = this.route.snapshot.paramMap.get('id');
    this.userService.getUserById(this.idUser).subscribe((userdata: any) => {
      this.userForm = this.formBuilder.group({
        nom: new FormControl(userdata.nom),
        prenom: new FormControl(userdata.prenom),
        role: new FormControl(userdata.role),
        email: new FormControl(userdata.email)
      });
    });
  }
  UpdateUser(){
    this.userService.updateUser(this.idUser,this.userForm.value).subscribe(
      (Reponse) => {
        console.log(Reponse)
        alert("l'employe a ete modifie avec succes")
        this.router.navigate(['/users'])
      },
      (erreur) => {
        console.log(erreur)
      }
    )

  }
  
}

