import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InicioAtendentePage } from './inicio-atendente.page';

describe('InicioAtendentePage', () => {
  let component: InicioAtendentePage;
  let fixture: ComponentFixture<InicioAtendentePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(InicioAtendentePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
