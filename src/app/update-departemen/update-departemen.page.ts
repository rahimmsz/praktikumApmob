import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-update-departemen',
  templateUrl: './update-departemen.page.html',
  styleUrls: ['./update-departemen.page.scss'],
})
export class UpdateDepartemenPage implements OnInit {

  id: any;
  nama_departemen: any;
  lokasi: any;

  department: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _apiService: ApiService,
    private toastController: ToastController
  ) {
    this.id = this.route.snapshot.params['id']; // Gunakan 'snapshot.params' untuk mendapatkan nilai ID saat inisialisasi
    console.log(this.id);
    this.getOneDepartment(this.id);
  }

  ngOnInit() {
  }

  async presentToast(message: any) {
    const toast = await this.toastController.create({
      message: message,
      duration: 1500,
      position: 'bottom'
    });

    await toast.present();
  }

  getOneDepartment(id: any) {
    this._apiService.getOneDepartment(id).subscribe((res: any) => {
      console.log('sukses', res);
      if (res.length > 0) {
        let departement = res[0];
        this.nama_departemen = departement.nama_departemen;
        this.lokasi = departement.lokasi;
      }
    }, (err: any) => {
      console.log('error', err);
    });
  }

  kembali() {
    this.router.navigate(['/department'], {
      state: { reload: true }
    }).then();
  }

  updateDepartment() {
    let data = {
      nama_departemen: this.nama_departemen,
      lokasi: this.lokasi
    };
    this._apiService.updateDepartment(this.id, data).subscribe((res: any) => {
      console.log("sukses", res);
      this.presentToast('berhasil ubah');

    }, (err: any) => {
      console.log("gagal", err);
      this.presentToast('Gagal Merubah Data');
    });
  }
}
