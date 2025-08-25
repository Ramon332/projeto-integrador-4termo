import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Contadorcomp } from './contadorcomp';

describe('Contadorcomp', () => {
  let component: Contadorcomp;
  let fixture: ComponentFixture<Contadorcomp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Contadorcomp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Contadorcomp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
