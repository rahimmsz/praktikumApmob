import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-update-pegawai',
  templateUrl: './update-pegawai.page.html',
  styleUrls: ['./update-pegawai.page.scss'],
})
export class UpdatePegawaiPage implements OnInit {

  id: any;
  nama: any;
  posisi: any;
  gaji : any;
  tanggal_masuk : any;
  pegawai: any;

  constructor( 
    private route: ActivatedRoute,
    private router: Router,
    private _apiService: ApiService,
    private toastController: ToastController) { 
      this.route.params.subscribe((params:any) => {
        this.id = params.id;
        console.log(this.id);
        this.getOnePegawai(this.id);
        this.getPegawai();    
      })
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

  getOnePegawai(id:any){
    this._apiService.getOnePegawai(id).subscribe((res:any) => {
     console.log("sukses", res);
      let pegawai = res [0];
      this.nama = pegawai.nama;
      this.posisi = pegawai.posisi;
      this.gaji = pegawai.gaji;
      this.tanggal_masuk = pegawai.tanggal_masuk;
    }, (err:any) => {
     console.log("error", err);
    });
  }

  kembali(){
    this.router.navigate(['/home'], {state: {reload: true}}).then();
  }

  getPegawai() {
    this._apiService.getPegawai().subscribe((res: any) => {
      console.log("Sukses", res);
      this.getPegawai();
    },(error: any) => {
      console.log("Gagal", error);
    });

  }

  updatePegawai() {
    let data = {
      nama :this.nama,
      posisi:  this.posisi,
      gaji : this.gaji,
      tanggal_masuk : this.tanggal_masuk
    }
    this._apiService.updatePegawai(this.id, data).subscribe((res:any) => {
      console.log("sukses", res);
      this.presentToast('berhasil ubah');
 
    },(err:any) => {
      console.log("gagal", err);
      this.presentToast('Gagal Merubah Data');
    });
  }


}
