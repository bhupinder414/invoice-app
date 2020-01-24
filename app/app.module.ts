import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  MatInputModule } from '@angular/material';
import {  MatCardModule } from '@angular/material';
import {  MatButtonModule } from '@angular/material';
import {  MatToolbarModule } from '@angular/material';
import {  MatExpansionModule } from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
