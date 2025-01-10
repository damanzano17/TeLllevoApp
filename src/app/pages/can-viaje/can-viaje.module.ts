import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CanViajePageRoutingModule } from './can-viaje-routing.module';

import { CanViajePage } from './can-viaje.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CanViajePageRoutingModule,
    CanViajePage
  ],

})
export class CanViajePageModule {}
