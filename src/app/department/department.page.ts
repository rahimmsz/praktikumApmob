import { Component, OnInit, ViewChild } from '@angular/core';
import { IonModal, ToastController } from '@ionic/angular';
import { ApiService } from '../api.service';
import { OverlayEventDetail } from '@ionic/core/components' 

@Component({
  selector: 'app-department',
  templateUrl: './department.page.html',
  styleUrls: ['./department.page.scss'],
})
export class DepartmentPage {

  @ViewChild(IonModal) modal! : IonModal;

  nama_departemen : any;
  lokasi: any;

  department: any;

  constructor(
    public _apiService: ApiService,
    private toastController : ToastController
  ) {
    this.getDepartment();
   }

  ngOnInit() {
  }

  cancel(){
    this.modal.dismiss(null, 'cancel')
  } 

  confirm(){
    this.modal.dismiss(null,'confirm');
  }

  onWillDismiss(event: Event){
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if(ev.detail.role === 'confirm') {
      this.addDepartment();
    }
  }

  async presentToast(message: any) {
    const toast = await this.toastController.create({
      message: message,
      duration: 1500,
      position: 'bottom'
    });

    await toast.present();
  }

  addDepartment() {
    let data = {
      nama_departemen: this.nama_departemen,
      lokasi: this.lokasi,
    }

    this._apiService.addDepartment(data).subscribe((res: any) => {
      console.log("Berhasil Menambah Data Department", res);
      this.nama_departemen = '';
      this.lokasi = '';
      // alert('Berhasil Menambah Data Pegawai');
      this.presentToast('Berhasil Menambah Data Department');
      this.getDepartment();
    },(error: any) => {
      console.log("Gagal Menambah Data Department", error);
    });
  }

  getDepartment() {
    this._apiService.getDepartment().subscribe((res: any) => {
      console.log("Sukses", res);
      this.department = res;
    },(error: any) => {
      console.log("Gagal", error);
    });
  }

  deleteDepartment(id:any) {
    this._apiService.deleteDepartment(id).subscribe((res: any) => {
      this.presentToast('Berhasil Menghapus Data');
      this.getDepartment();
    },(error: any) => {
      this.presentToast('Gagal Menghapus Data');
    });
  }

}
