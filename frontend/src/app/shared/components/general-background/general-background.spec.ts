import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralBackground } from './general-background';

describe('GeneralBackground', () => {
  let component: GeneralBackground;
  let fixture: ComponentFixture<GeneralBackground>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GeneralBackground]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeneralBackground);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
