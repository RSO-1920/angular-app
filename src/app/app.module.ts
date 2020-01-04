import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

/** Modules * */
import {MaterialModule} from './material/material.module';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

/** Components* */
import { AppComponent } from './app.component';
import { UserCredentialsComponent } from './components/user-credentials/user-credentials.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { Page404Component } from './components/page404/page404.component';
import { FileCardComponent } from './components/utils/file-card/file-card.component';
import { HttpClientModule } from '@angular/common/http';

/**
 * Services
 */
import {ChannelService} from './services/channel.service';
import {UserService} from './services/user.service';


@NgModule({
  declarations: [
    AppComponent,
    UserCredentialsComponent,
    LandingPageComponent,
    Page404Component,
    FileCardComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MaterialModule,
        FormsModule,
        FlexLayoutModule,
        HttpClientModule,

    ],
  providers: [
      ChannelService,
      UserService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
