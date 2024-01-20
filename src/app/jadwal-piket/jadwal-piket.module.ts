import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JadwalPiketPageRoutingModule } from './jadwal-piket-routing.module';

import { JadwalPiketPage } from './jadwal-piket.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JadwalPiketPageRoutingModule
  ],
  declarations: [JadwalPiketPage]
})
export class JadwalPiketPageModule {}
