import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { UserDeleteComponent } from './user-delete/user-delete.component';
import { UserAddComponent } from './user-add/user-add.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './homepage/homepage.component';
import { TaskListComponent } from './task-list/task-list.component';
import { MatSelectModule } from '@angular/material/select';
import { CookieInterceptor } from 'src/module/cookie.interceptor';
import { AddTaskComponent } from './add-task/add-task.component';
import { DeleteTaskComponent } from './delete-task/delete-task.component';
import { UpdateTaskComponent } from './update-task/update-task.component'; 

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserDeleteComponent,
    UserAddComponent,
    UpdateUserComponent,
    LoginComponent,
    HomepageComponent,
    TaskListComponent,
    AddTaskComponent,
    DeleteTaskComponent,
    UpdateTaskComponent,
  ],
  imports: [
    MatSelectModule,
    MatCardModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule 
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CookieInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
