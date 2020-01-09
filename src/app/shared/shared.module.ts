import { NgModule } from '@angular/core';

import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { HeaderComponent } from './header/header.component';
import { SiderbarComponent } from './siderbar/siderbar.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    RouterModule,
    CommonModule,

  ],
    declarations: [
      HeaderComponent,
      SiderbarComponent,
      BreadcrumbsComponent,
      NopagefoundComponent
    ],
    exports: [
      HeaderComponent,
      SiderbarComponent,
      BreadcrumbsComponent,
      NopagefoundComponent
    ]
})

export class SharedModule { }


