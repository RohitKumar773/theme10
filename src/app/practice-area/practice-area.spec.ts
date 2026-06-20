import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticeArea } from './practice-area';

describe('PracticeArea', () => {
  let component: PracticeArea;
  let fixture: ComponentFixture<PracticeArea>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PracticeArea]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PracticeArea);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
