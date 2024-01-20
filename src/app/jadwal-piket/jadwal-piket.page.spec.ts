import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JadwalPiketPage } from './jadwal-piket.page';

describe('JadwalPiketPage', () => {
  let component: JadwalPiketPage;
  let fixture: ComponentFixture<JadwalPiketPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(JadwalPiketPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
