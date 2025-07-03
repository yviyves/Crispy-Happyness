import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesMain } from './notes-main';

describe('NotesMain', () => {
  let component: NotesMain;
  let fixture: ComponentFixture<NotesMain>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotesMain]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotesMain);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
