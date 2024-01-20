import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UpdateDepartemenPage } from './update-departemen.page';

describe('UpdateDepartemenPage', () => {
  let component: UpdateDepartemenPage;
  let fixture: ComponentFixture<UpdateDepartemenPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(UpdateDepartemenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
