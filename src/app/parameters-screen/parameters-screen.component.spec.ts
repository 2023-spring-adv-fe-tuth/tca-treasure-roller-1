import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParametersScreenComponent } from './parameters-screen.component';

describe('ParametersScreenComponent', () => {
  let component: ParametersScreenComponent;
  let fixture: ComponentFixture<ParametersScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParametersScreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParametersScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
