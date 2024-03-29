import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentInfoPageComponent } from './student-info-page.component';

describe('StudentInfoPageComponent', () => {
  let component: StudentInfoPageComponent;
  let fixture: ComponentFixture<StudentInfoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentInfoPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentInfoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
