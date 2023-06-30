import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:3000/users'; // Remplacez cette URL par l'URL de votre API

  constructor(private http: HttpClient) { }

  getAllTasks(userId: number): Observable<any[]> {
    const url = `${this.apiUrl}/${userId}/tasks`;
    return this.http.get<any[]>(url);
  }

  getTaskById(userId: number, taskId: number): Observable<any> {
    const url = `${this.apiUrl}/${userId}/tasks/${taskId}`;
    return this.http.get<any>(url);
  }

  createTask(userId: number, task: any): Observable<any> {
    const url = `${this.apiUrl}/${userId}/tasks`;
    return this.http.post<any>(url, task);
  }

  updateTask(userId: number, taskId: number, task: any): Observable<any> {
    const url = `${this.apiUrl}/${userId}/tasks/${taskId}`;
    return this.http.put<any>(url, task);
  }

  deleteTask(userId: number, taskId: number): Observable<any> {
    const url = `${this.apiUrl}/${userId}/tasks/${taskId}`;
    return this.http.delete<any>(url);
  }
}
