import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';


const routes: Routes = [
    { path: '', redirectTo: 'auth', pathMatch: 'full'},
    { path: 'auth', component: LoginComponent},
    { path: 'dashboard/:id', component: DashboardComponent},
    { path: 'signup', component: SignupComponent},
    { path: 'profile/:id', component: ProfileComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
      RouterModule
  ]
})
export class AppRoutingModule { }
