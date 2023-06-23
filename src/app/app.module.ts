import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { UserDeleteComponent } from './user-delete/user-delete.component';
import { UserAddComponent } from './user-add/user-add.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserDeleteComponent,
    UserAddComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
