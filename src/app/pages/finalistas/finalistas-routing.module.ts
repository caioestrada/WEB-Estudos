import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FinalistasComponent } from './finalistas.component';

const routes: Routes = [
  {
    path: '',
    component: FinalistasComponent,
    data: {}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FinalistasRoutingModule { }
