import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserServiceService } from 'src/services/userService/user-service.service';

@Component({
  selector: 'app-user-delete',
  templateUrl: './user-delete.component.html',
  styleUrls: ['./user-delete.component.css']
})
export class UserDeleteComponent implements OnInit {
  id!: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserServiceService,
    private httpClient: HttpClient
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.deleteUser(this.id);
  }

  deleteUser(id: number) {
    // Envoie une requête DELETE à l'URL http://localhost:3000/users/{id} pour supprimer l'utilisateur
    this.httpClient.delete(`http://localhost:3000/users/${id}`).subscribe(() => {
      console.log("L'utilisateur a été supprimé avec succès !");
      this.router.navigate(['/users']); // Redirection vers '/users'
    });
  }
}
