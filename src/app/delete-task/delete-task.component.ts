import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from 'src/services/taskService/task.service';
import { AuthService } from 'src/services/authService/auth.service';
import { User } from 'src/models/user/user';

@Component({
  selector: 'app-delete-task',
  templateUrl: './delete-task.component.html',
  styleUrls: ['./delete-task.component.css']
})
export class DeleteTaskComponent implements OnInit {
  userId: number | undefined;
  taskId: number | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private taskService: TaskService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    console.log('test')
    this.authService.getCurrentUser().subscribe((user: User | null) => {
      console.log('user' + user)
      if (user) {
        this.userId = user.id;
        this.taskId = +this.route.snapshot.paramMap.get('id')!; // Utilisation de ! pour indiquer que la valeur ne sera pas nulle

        if (this.userId && this.taskId) {
          this.deleteTask(this.userId, this.taskId);
        } else {
          this.router.navigate(['/task']);
        }
      }
    });
  }

  deleteTask(userId: number, taskId: number): void {
    console.log('ok')
    this.taskService.deleteTask(userId, taskId).subscribe(
      () => {
        console.log('Tâche supprimée avec succès');
        this.router.navigate(['/task']);
      },
      (error) => {
        console.log('Une erreur s\'est produite lors de la suppression de la tâche :', error);
        this.router.navigate(['/task']);
      }
    );
  }

  cancel(): void {
    this.router.navigate(['/task']);
  }
}
