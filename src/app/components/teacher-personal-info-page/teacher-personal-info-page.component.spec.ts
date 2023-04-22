import {ComponentFixture, TestBed} from '@angular/core/testing';

import {TeacherPersonalInfoPageComponent} from './teacher-personal-info-page.component';

describe('TeacherPersonalInfoPageComponent', () => {
    let component: TeacherPersonalInfoPageComponent;
    let fixture: ComponentFixture<TeacherPersonalInfoPageComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [TeacherPersonalInfoPageComponent]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TeacherPersonalInfoPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
