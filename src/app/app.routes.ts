import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { RepresentacionInformacion } from './pages/representacion-informacion/representacion-informacion';

export const routes: Routes = [
  { path: 'home', component: Home },
  {path: 'representacion-informacion', component: RepresentacionInformacion},
  {path: '**', redirectTo: '/home'}
];
