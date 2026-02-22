import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepresentacionInformacion } from './representacion-informacion';

describe('RepresentacionInformacion', () => {
  let component: RepresentacionInformacion;
  let fixture: ComponentFixture<RepresentacionInformacion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RepresentacionInformacion]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RepresentacionInformacion);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
