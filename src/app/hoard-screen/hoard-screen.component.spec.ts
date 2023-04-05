import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoardScreenComponent } from './hoard-screen.component';

describe('HoardScreenComponent', () => {
  let component: HoardScreenComponent;
  let fixture: ComponentFixture<HoardScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HoardScreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HoardScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
