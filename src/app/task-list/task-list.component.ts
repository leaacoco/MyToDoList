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
  filteredTasks: Task[] = [];
  userId: number | undefined;
  selectedStatus: string = 'Tous';

  constructor(private taskService: TaskService, private authService: AuthService) { }

  ngOnInit() {
    this.authService.getCurrentUser().subscribe(user => {
      console.log(user);
      if (user) {
        this.userId = user.id;
        this.getTasksByUserId(this.userId);
      }
    });
  }

  private getTasksByUserId(userId: number): void {
    if (this.userId) {
      this.taskService.getAllTasks(userId).subscribe(tasks => {
        this.tasks = tasks;
        this.filteredTasks = tasks;
      });
    }
  }

  openCard(task: Task) {
    task.showComment = !task.showComment;
  }

  getStatusClass(status: string): string {
    switch (status) {
      case 'Annulé':
        return 'status-cancelled';
      case 'En cours':
        return 'status-in-progress';
      case 'A faire':
        return 'status-to-do';
      case 'Terminé':
        return 'status-completed';
      default:
        return '';
    }
  }

  filterTasks(status: string) {
    if (status === 'Tous') {
      this.filteredTasks = this.tasks;
    } else {
      this.filteredTasks = this.tasks.filter(task => task.status.toLowerCase() === status.toLowerCase());
    }
  }

  resetFilter() {
    this.filteredTasks = this.tasks;
    this.selectedStatus = 'Tous';
  }
}
