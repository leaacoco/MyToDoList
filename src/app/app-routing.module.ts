import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { UserDeleteComponent } from './user-delete/user-delete.component';
import { UserAddComponent } from './user-add/user-add.component';
import { UpdateUserComponent } from './update-user/update-user.component';

const routes: Routes = [
  {path: 'users', component: UsersComponent},
  {path: 'user-delete/:id', component: UserDeleteComponent},
  {path: 'user-add', component: UserAddComponent},
  {path: 'user-update/:id', component: UpdateUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


