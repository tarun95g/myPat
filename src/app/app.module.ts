import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AppListingComponent } from './app-listing/app-listing.component';
import { AppDetailComponent } from './app-detail/app-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    AppListingComponent,
    AppDetailComponent
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
