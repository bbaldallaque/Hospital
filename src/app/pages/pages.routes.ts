import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgessComponent } from './progess/progess.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';

const pageRoutes: Routes = [
  { path: '',
   component: PagesComponent,
   children : [
      { path: 'dashboard', component: DashboardComponent, data: { titulo: 'Dashboard'} },
      { path: 'progress', component: ProgessComponent, data: { titulo: 'Progress'} },
      { path: 'graficas1', component: Graficas1Component, data: { titulo: 'Graficas'} },
      { path: 'promesas', component: PromesasComponent, data: { titulo: 'Promesas'} },
      { path: 'rxjs', component: RxjsComponent, data: { titulo: 'rxjs'} },
      { path: 'account-settings', component: AccountSettingsComponent, data: { titulo: 'Ajustes del Colores'} },
      { path: '', redirectTo: '/dashboard', pathMatch: 'full'},

   ]
  },
];

export const PAGES_ROUTES = RouterModule.forChild( pageRoutes );
