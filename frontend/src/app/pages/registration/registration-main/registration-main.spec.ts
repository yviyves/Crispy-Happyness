import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationMain } from './registration-main';

describe('RegistrationMain', () => {
  let component: RegistrationMain;
  let fixture: ComponentFixture<RegistrationMain>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrationMain]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrationMain);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
