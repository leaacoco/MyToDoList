import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserServiceService } from 'src/services/userService/user-service.service';

@Component({
  selector: 'app-user-delete',
  templateUrl: './user-delete.component.html',
  styleUrls: ['./user-delete.component.css']
})
export class UserDeleteComponent {
  id !: any;
  constructor(private route: ActivatedRoute,
    private router: Router,
    private US : UserServiceService,
    private HttpClient: HttpClient){}

    ngOnInit(): void {
      console.log('ca marche pas mon reuf')
      this.id = this.route.snapshot.paramMap.get('id')
      this.deleteEmployee(this.id)
}

deleteEmployee(id: number) {
  // Envoie une requête DELETE à l'URL http://localhost:3000/employees/{id} pour supprimer l'employé
  this.HttpClient.delete(`http://localhost:3000/users/${id}`).subscribe();
  alert('L\'employé a été supprimé avec succès !');
  this.router.navigate(['/Users']);
}

}
