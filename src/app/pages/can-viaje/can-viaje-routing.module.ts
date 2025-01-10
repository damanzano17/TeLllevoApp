import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CanViajePage } from './can-viaje.page';

const routes: Routes = [
  {
    path: '',
    component: CanViajePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CanViajePageRoutingModule {}
