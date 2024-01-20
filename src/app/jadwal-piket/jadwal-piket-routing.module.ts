import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JadwalPiketPage } from './jadwal-piket.page';

const routes: Routes = [
  {
    path: '',
    component: JadwalPiketPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JadwalPiketPageRoutingModule {}
