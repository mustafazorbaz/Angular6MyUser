import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { UserListComponent } from './user-list/user-list.component';
import { RegistrationComponent } from './registration/registration.component';
import { UserService } from './user.service';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegistrationComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
    {
      path: 'registration',
      component: RegistrationComponent
    },
    {
      path: 'home',
      component: HomeComponent
    },
    {
      path: '',
      component: HomeComponent
    }
  ])
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
