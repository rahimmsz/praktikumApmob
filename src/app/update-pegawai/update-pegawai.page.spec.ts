import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UpdatePegawaiPage } from './update-pegawai.page';

describe('UpdatePegawaiPage', () => {
  let component: UpdatePegawaiPage;
  let fixture: ComponentFixture<UpdatePegawaiPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(UpdatePegawaiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
