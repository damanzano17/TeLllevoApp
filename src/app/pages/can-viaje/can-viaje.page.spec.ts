import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CanViajePage } from './can-viaje.page';

describe('CanViajePage', () => {
  let component: CanViajePage;
  let fixture: ComponentFixture<CanViajePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CanViajePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
