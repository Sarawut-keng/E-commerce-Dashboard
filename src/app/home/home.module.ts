import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeadComponent } from './head/head.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    HeadComponent,
    SideNavComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeadComponent,
    SideNavComponent,
    FooterComponent
  ]
})
export class HomeModule { }
