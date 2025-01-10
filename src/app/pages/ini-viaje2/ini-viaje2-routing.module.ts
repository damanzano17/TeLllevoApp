import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IniViaje2Page } from './ini-viaje2.page';

const routes: Routes = [
  {
    path: '',
    component: IniViaje2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IniViaje2PageRoutingModule {}
