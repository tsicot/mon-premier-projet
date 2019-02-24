import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AppareilComponent} from './appareil/appareil.component';
import {AppareilService} from './services/appareil.service';
import {AuthComponent} from './auth/auth.component';
import {AppareilViewComponent} from './appareil-view/appareil-view.component';
import {RouterModule, Routes} from '@angular/router';
import {AuthService} from './services/auth.sevice';
import {SingleAppareilComponent} from './single-appareil/single-appareil.component';
import {FourOhFourComponent} from './four-oh-four/four-oh-four.component';
import {AuthGuard} from './services/auth-guard.service';

const appRoutes: Routes = [
  {path: 'auth', component: AuthComponent},
  {path: 'appareils/:id', canActivate: [AuthGuard], component: SingleAppareilComponent},
  {path: 'appareils', canActivate: [AuthGuard], component: AppareilViewComponent},
  {path: '', component: AppareilViewComponent},
  {path: 'notfound', component: FourOhFourComponent},
  {path: '**', redirectTo: '/notfound'}
];

@NgModule({
  declarations: [
    AppComponent,
    AppareilComponent,
    AuthComponent,
    AppareilViewComponent,
    SingleAppareilComponent,
    FourOhFourComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AppareilService,
    AuthService,
    AuthGuard
],
  bootstrap: [AppComponent]
})
export class AppModule { }
