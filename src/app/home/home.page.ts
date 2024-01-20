import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../api.service';
import { IonModal } from '@ionic/angular'; 
import { OverlayEventDetail } from '@ionic/core/components' 
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage  {

  @ViewChild(IonModal) modal!: IonModal;

  nama: any;
  posisi: any;
  gaji: any;
  tanggal_masuk : any;

  Pegawai: any;

  constructor(
    public _apiService: ApiService,
    private toastController: ToastController
  ) {
    this.getPegawai();
  }
  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    this.modal.dismiss(null, 'confirm');
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
      this.addPegawai();
    }
  }
  // end Modal Function

  // start Toast Function
  async presentToast(message: any) {
    const toast = await this.toastController.create({
      message: message,
      duration: 1500,
      position: 'bottom'
    });

    await toast.present();
  }
  // end Toast Function

  addPegawai() {
    let data = {
      nama: this.nama,
      posisi: this.posisi,
      gaji: this.gaji,
      tanggal_masuk : this.tanggal_masuk
    }

    this._apiService.addPegawai(data).subscribe((res: any) => {
      console.log("Berhasil Menambah Data Pegawai", res);
      this.nama = '';
      this.posisi = '';
      this.gaji = '';
      this.tanggal_masuk = '';
      // alert('Berhasil Menambah Data Pegawai');
      this.presentToast('Berhasil Menambah Data Pegawai');
      this.getPegawai();
    },(error: any) => {
      console.log("Gagal Menambah Data Pegawai", error);
    });
  }

  getPegawai() {
    this._apiService.getPegawai().subscribe((res: any) => {
      console.log("Sukses", res);
      this.Pegawai = res;
    },(error: any) => {
      console.log("Gagal", error);
    });
  }

  deletePegawai(id:any) {
    this._apiService.deletePegawai(id).subscribe((res: any) => {
      this.presentToast('Berhasil Menghapus Data');
      this.getPegawai();
    },(error: any) => {
      this.presentToast('Gagal Menghapus Data');
    });
  }
}
  