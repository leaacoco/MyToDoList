import { Component, OnInit } from '@angular/core';
import { Task } from 'src/models/user/user';
import { TaskService } from 'src/services/taskService/task.service';
import { AuthService } from 'src/services/authService/auth.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];
  userId: number | undefined;

  constructor(private taskService: TaskService, private authService: AuthService) { }

  ngOnInit() {
    this.authService.getCurrentUser().subscribe(user => {
      if (user) {
        this.userId = user.id;
        this.getTasksByUserId();
      }
    });
  }

  private getTasksByUserId(): void {
    if (this.userId) {
      this.taskService.getAllTasks(this.userId).subscribe(tasks => {
        this.tasks = tasks;
      });
    }
  }

  openCard(task: Task) {
    task.showComment = !task.showComment;
  }
}
