import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeditationMain } from './meditation-main';

describe('MeditationMain', () => {
  let component: MeditationMain;
  let fixture: ComponentFixture<MeditationMain>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MeditationMain]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeditationMain);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
