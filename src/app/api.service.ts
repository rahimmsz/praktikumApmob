import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    public http: HttpClient
  ) { }

  addPegawai(data:any) {
    return this.http.post('http://localhost:88/api/create_pegawai.php', data)
  }
  
  getPegawai() {
    return this.http.get('http://localhost:88/api/get_all_pegawai.php');
  }
  
  deletePegawai(id:any) {
    return this.http.get('http://localhost:88/api/delete_pegawai.php?id='+id);
  }
  
  getOnePegawai(id:any) {
    return this.http.get('http://localhost:88/api/get_one_pegawai.php?id='+id);
  }
  
  updatePegawai(id:any, data:any) {
    return this.http.put('http://localhost:88/api/update_pegawai.php?id='+id, data);
  }

  addDepartment(data:any) {
    return this.http.post('http://localhost:88/api/create_department.php', data)
  }
  
  getDepartment() {
    return this.http.get('http://localhost:88/api/get_all_department.php');
  }
  
  deleteDepartment(id:any) {
    return this.http.get('http://localhost:88/api/delete_department.php?id='+id);
  }
  
  getOneDepartment(id:any) {
    return this.http.get('http://localhost:88/api/get_one_department.php?id='+id);
  }
  
  updateDepartment(id:any, data:any) {
    return this.http.put('http://localhost:88/api/update_department.php?id='+id, data);
  }
}
