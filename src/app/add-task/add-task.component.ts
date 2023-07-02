import { Component, OnInit } from '@angular/core';
import { Task, User } from 'src/models/user/user';
import { TaskService } from 'src/services/taskService/task.service';
import { AuthService } from 'src/services/authService/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  task = new Task();
  userId: User | null | undefined ;

  constructor(
    private taskService: TaskService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.authService.getCurrentUser().subscribe((userId) => {
      this.userId = userId;
    });
  }

  ajouter(): void {
    if (this.userId) {
      this.task.user_id = this.userId.id;
      this.taskService.createTask(this.userId.id, this.task).subscribe(() => {
        console.log('Tâche ajoutée avec succès');
        this.router.navigate(['/task']); // Redirection vers la page des tâches après l'ajout
      });
    }
  }
}
