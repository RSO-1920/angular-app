import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserCredentialsComponent } from './components/user-credentials/user-credentials.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import {LoginActivateGuard} from './guarts/login-activate.guard';
import {Page404Component} from './components/page404/page404.component';
import {IsLoggedInGuard} from './guarts/is-logged-in.guard';
import {AllChannelsComponent} from './components/all-channels/all-channels.component';


const routes: Routes = [
    {path: '', pathMatch: 'full', component: UserCredentialsComponent, canActivate: [IsLoggedInGuard]},
    {path: 'main', component: LandingPageComponent, canActivate: [LoginActivateGuard]},
    {path: 'allChannels', component: AllChannelsComponent, canActivate: [LoginActivateGuard]},
    {path: '**', component: Page404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
