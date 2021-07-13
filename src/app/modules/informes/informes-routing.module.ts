import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { NewUserComponent } from './new-user/new-user.component';

const routes: Routes = [{
  path: '',
  children: [
    { path: 'users', component: UsersComponent },
    { path: 'new-user', component: NewUserComponent }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InformesRoutingModule { }
