import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from 'src/models/user/user';
import { TaskService } from 'src/services/taskService/task.service';

@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.component.html',
  styleUrls: ['./update-task.component.css']
})
export class UpdateTaskComponent implements OnInit {
  taskId = 0;
  task = new Task();
  errorMessage: string | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private taskService: TaskService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.taskId = Number(params.get('id'));
    });

    this.taskService.getTaskById(this.taskId).subscribe(
      task => {
        console.log('ok cheeeff');
        this.task = task;
      },
      error => {
        this.errorMessage = 'Erreur lors de la récupération des détails de la tâche.';
      }
    );
  }

  updateTask(): void {
    this.taskService.updateTask(this.taskId, this.task).subscribe(
      response => {
        console.log(response.message);
        // Rediriger vers l'URL '/task'
        this.router.navigate(['/task']);
      },
      error => {
        this.errorMessage = 'Erreur lors de la mise à jour de la tâche.';
      }
    );
  }
}
