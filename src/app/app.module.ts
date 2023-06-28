import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { UserDeleteComponent } from './user-delete/user-delete.component';
import { UserAddComponent } from './user-add/user-add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateUserComponent } from './update-user/update-user.component';
import { LoginComponent } from './login/login.component';
import { TachesComponent } from './taches/taches.component';
import { HomepageComponent } from './homepage/homepage.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserDeleteComponent,
    UserAddComponent,
    UpdateUserComponent,
    LoginComponent,
    TachesComponent,
    HomepageComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
