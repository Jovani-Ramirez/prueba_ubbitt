import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material/material.module';
import { InformesRoutingModule } from './informes-routing.module';
import { HeaderComponent } from '../header/header.component';
import { UsersComponent } from './users/users.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    HeaderComponent,
    UsersComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    InformesRoutingModule,
    HttpClientModule
  ]
})
export class InformesModule { }
