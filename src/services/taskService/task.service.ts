import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from 'src/models/user/user';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:8000'; // Mettez à jour cette URL avec l'URL de votre API

  constructor(private http: HttpClient) { }

  getAllTasks(userId: number): Observable<any[]> {
    const url = `${this.apiUrl}/users/${userId}/tasks`;
    console.log(url)
    return this.http.get<any[]>(url);
  }

  getTaskById(taskId: number): Observable<any> {
    const url = `${this.apiUrl}/tasks/${taskId}`;
    return this.http.get<any>(url);
  }
  

  createTask(userId: number, task: Task): Observable<any> {
    const url = `${this.apiUrl}/users/${userId}/tasks`;
    return this.http.post<any>(url, task);
  }

  updateTask(taskId: number, task: Task): Observable<any> {
    const url = `${this.apiUrl}/tasks/${taskId}`;
    console.log('url utilisé par le service :' + url)
    return this.http.put<any>(url, task);
  }
  

  deleteTask(userId: number, taskId: number): Observable<Task> {
    const url = `${this.apiUrl}/users/${userId}/tasks/${taskId}`;
    console.log(url)
    return this.http.delete<any>(url);
  }
}
