import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Formularios
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

//HTTP
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PagesComponent } from './pages/pages.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { APP_ROUTES } from './app.routes';

//Servicios
import { UsuarioService } from './servicios/usuario.service';
import { AuthGuardServiceInicio } from './servicios/auth-guard-inicio.service';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PagesComponent,
    NopagefoundComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    UsuarioService,
    AuthGuardServiceInicio
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
