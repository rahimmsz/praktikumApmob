import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailPegawaiPage } from './detail-pegawai.page';

const routes: Routes = [
  {
    path: '',
    component: DetailPegawaiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailPegawaiPageRoutingModule {}
