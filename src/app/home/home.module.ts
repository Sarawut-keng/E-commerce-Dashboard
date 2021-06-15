import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeadComponent } from './head/head.component';
import { FooterComponent } from './footer/footer.component';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';




@NgModule({
  declarations: [
    HeadComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule
  ],
  exports: [
    HeadComponent,
    FooterComponent
  ]
})
export class HomeModule { }
