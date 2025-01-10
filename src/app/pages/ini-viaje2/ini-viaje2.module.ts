import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IniViaje2PageRoutingModule } from './ini-viaje2-routing.module';

import { IniViaje2Page } from './ini-viaje2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IniViaje2PageRoutingModule,
    IniViaje2Page
  ],
})
export class IniViaje2PageModule {}
