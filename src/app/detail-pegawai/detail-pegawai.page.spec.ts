import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailPegawaiPage } from './detail-pegawai.page';

describe('DetailPegawaiPage', () => {
  let component: DetailPegawaiPage;
  let fixture: ComponentFixture<DetailPegawaiPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DetailPegawaiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
