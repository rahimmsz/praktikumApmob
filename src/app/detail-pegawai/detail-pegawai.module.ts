import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailPegawaiPageRoutingModule } from './detail-pegawai-routing.module';

import { DetailPegawaiPage } from './detail-pegawai.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailPegawaiPageRoutingModule
  ],
  declarations: [DetailPegawaiPage]
})
export class DetailPegawaiPageModule {}
