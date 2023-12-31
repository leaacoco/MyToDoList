import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { UserDeleteComponent } from './user-delete/user-delete.component';
import { UserAddComponent } from './user-add/user-add.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from 'src/guards/auth.guard';
import { HomepageComponent } from './homepage/homepage.component';
import { TaskListComponent } from './task-list/task-list.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { DeleteTaskComponent } from './delete-task/delete-task.component';
import { UpdateTaskComponent } from './update-task/update-task.component';

const routes: Routes = [
  { path: 'users', component: UsersComponent, canActivate: [AuthGuard] },
  { path: 'user-delete/:id', component: UserDeleteComponent, canActivate: [AuthGuard] },
  { path: 'user-add', component: UserAddComponent},
  { path: 'user-update/:id', component: UpdateUserComponent, canActivate: [AuthGuard] },
  { path: 'connexion', component: LoginComponent },
  { path: 'task', component: TaskListComponent },
  { path: '', component: HomepageComponent },
  { path: 'add-task', component: AddTaskComponent },
  { path: 'tasks/delete/:id', component: DeleteTaskComponent },
  { path: 'tasks/update/:id', component: UpdateTaskComponent }

  
  // Autres routes...
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
