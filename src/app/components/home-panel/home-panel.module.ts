import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePanelComponent } from './home-panel.component';

@NgModule({
  declarations: [
    HomePanelComponent
  ],
  exports: [
    HomePanelComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomePanelModule { }
