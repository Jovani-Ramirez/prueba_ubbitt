import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/login/login.component';
import { InformesModule } from './modules/informes/informes.module';
import { HomeComponent } from './modules/informes/home/home.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {
    path: 'informes',
    loadChildren: () => import('./modules/informes/informes.module').then(m => m.InformesModule)
  },
  {path: '**', pathMatch: 'full', redirectTo: 'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
