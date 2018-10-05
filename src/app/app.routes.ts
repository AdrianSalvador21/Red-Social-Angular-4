import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages/pages.component';
import { LoginComponent } from './login/login.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { AuthGuardServiceInicio } from './servicios/auth-guard-inicio.service';

const appRoutes: Routes = [
  { path: '', component:PagesComponent, canActivate: [AuthGuardServiceInicio] },
  { path: 'login', component:LoginComponent },
  { path: '**', component:NopagefoundComponent }
];

export const APP_ROUTES = RouterModule.forRoot(appRoutes);