import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from '../../material/material.module';
import { InformesRoutingModule } from './informes-routing.module';
import { HeaderComponent } from '../header/header.component';



@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    InformesRoutingModule
  ]
})
export class InformesModule { }
