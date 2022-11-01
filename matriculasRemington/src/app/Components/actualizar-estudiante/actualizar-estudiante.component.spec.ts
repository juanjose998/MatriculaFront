import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarEstudianteComponent } from './actualizar-estudiante.component';

describe('ActualizarEstudianteComponent', () => {
  let component: ActualizarEstudianteComponent;
  let fixture: ComponentFixture<ActualizarEstudianteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActualizarEstudianteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualizarEstudianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
