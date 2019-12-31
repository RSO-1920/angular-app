import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

/** Modules * */
import {MaterialModule} from './material/material.module';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/** Components* */
import { AppComponent } from './app.component';
import { UserCredentialsComponent } from './components/user-credentials/user-credentials.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { Page404Component } from './components/page404/page404.component';



@NgModule({
  declarations: [
    AppComponent,
    UserCredentialsComponent,
    LandingPageComponent,
    Page404Component
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MaterialModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
