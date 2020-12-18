import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FinalistasComponent } from './finalistas.component';
import { FinalistasRoutingModule } from './finalistas-routing.module';
import { HomePanelModule } from 'src/app/components/home-panel/home-panel.module';
import { CardFinalModule } from 'src/app/components/card-final/card-final.module';

@NgModule({
  declarations: [
    FinalistasComponent
  ],
  imports: [
    CommonModule,
    HomePanelModule,
    CardFinalModule,
    FinalistasRoutingModule,
  ]
})
export class FinalistasModule { }
