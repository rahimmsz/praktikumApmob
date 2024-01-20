import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateDepartemenPageRoutingModule } from './update-departemen-routing.module';

import { UpdateDepartemenPage } from './update-departemen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateDepartemenPageRoutingModule
  ],
  declarations: [UpdateDepartemenPage]
})
export class UpdateDepartemenPageModule {}
