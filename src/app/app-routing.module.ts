import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'update-pegawai/:id',
    loadChildren: () => import('./update-pegawai/update-pegawai.module').then( m => m.UpdatePegawaiPageModule)
  },
  {
    path: 'detail-pegawai/:id',
    loadChildren: () => import('./detail-pegawai/detail-pegawai.module').then( m => m.DetailPegawaiPageModule)
  },
  {
    path: 'department',
    loadChildren: () => import('./department/department.module').then(m => m.DepartmentPageModule)
  },
  {
    path: 'update-departemen/:id',
    loadChildren: () => import('./update-departemen/update-departemen.module').then( m => m.UpdateDepartemenPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
