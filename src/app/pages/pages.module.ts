import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PagesComponent } from './pages.component';

import { SharedModule } from '../shared/shared.module';

// ng2- charts

import { ChartsModule } from 'ng2-charts';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgessComponent } from './progess/progess.component';
import { Graficas1Component } from './graficas1/graficas1.component';

import { PAGES_ROUTES } from './pages.routes';


// Temporal
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { GraficoDonaComponent } from '../components/grafico-dona/grafico-dona.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';




@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
    ProgessComponent,
    Graficas1Component,
    IncrementadorComponent,
    AccountSettingsComponent,
    GraficoDonaComponent,
    PromesasComponent,
    RxjsComponent
  ],
   exports: [
    DashboardComponent,
    ProgessComponent,
    Graficas1Component,
    GraficoDonaComponent

   ],
   imports: [
    SharedModule,
    PAGES_ROUTES,
    FormsModule,
    ChartsModule

   ]
})
export class PagesModule { }

