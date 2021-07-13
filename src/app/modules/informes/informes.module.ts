import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material/material.module';
import { InformesRoutingModule } from './informes-routing.module';
import { UsersComponent } from './users/users.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    UsersComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    InformesRoutingModule,
    HttpClientModule
  ]
})
export class InformesModule { }
