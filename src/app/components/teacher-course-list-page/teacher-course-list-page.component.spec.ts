import {ComponentFixture, TestBed} from '@angular/core/testing';

import {TeacherCourseListPageComponent} from './teacher-course-list-page.component';

describe('TeacherCourseListPageComponent', () => {
    let component: TeacherCourseListPageComponent;
    let fixture: ComponentFixture<TeacherCourseListPageComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [TeacherCourseListPageComponent]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TeacherCourseListPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
