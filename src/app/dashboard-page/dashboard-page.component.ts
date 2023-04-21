import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {FullCalendarComponent} from '@fullcalendar/angular';
import {CalendarOptions} from '@fullcalendar/core';
import {ViewManager} from '../services/view-manager-service/view-manager.service';
import {Database} from '../services/view-manager-service/database.service';
import {Router} from '@angular/router';
import {LocalStorageManager} from '../services/view-manager-service/local-storage';
import {Professor} from '../models/professor';
import {Lectures} from "../models/lecture";
import {Student} from "../models/student-list";
import {Course} from "../models/course";
import dayGridPlugin from '@fullcalendar/daygrid';


@Component({
    selector: 'app-dashboard-page',
    templateUrl: './dashboard-page.component.html',
    styleUrls: ['./dashboard-page.component.css']
})
export class DashboardPageComponent implements OnInit {

    @ViewChild("calendar") calendar!: FullCalendarComponent;
    lecturesList: Lectures[] = [];
    lectureToAttend: Lectures[] = [];
    studentList: Student[] = [];
    professorList: Professor[] = [];
    coursesIsSubs: number [] = [];
    courseIsTaught: number [] = [];
    courseList!: Course[];


    constructor(private viewManager: ViewManager, public eventDialog: MatDialog, private database: Database,
                private router: Router, private localStorage: LocalStorageManager) {
    }

    ngOnInit(): void {
        this.viewManager.ShowMenuToolbar(true);
        this.lecturesList = this.database.lectures;
        this.studentList = this.database.students;
        this.courseList = this.database.courses;
        this.professorList = this.database.professors;


        if (this.localStorage.getUserType() == 1) {
            for (let student of this.studentList) {
                if (localStorage['userid'] == student.AM) {
                    for (let id of student.idCourses)
                        this.coursesIsSubs.push(id);
                }
            }

            for (let course of this.coursesIsSubs) {
                for (let lecture of this.lecturesList) {
                    if (course == lecture.courseid)
                        this.lectureToAttend.push(lecture);
                }
            }
        }
        if (this.localStorage.getUserType() == 2) {
            for (let course of this.courseList) {
                if (localStorage['userid'] == course.professorID) {
                    this.courseIsTaught.push(course.id);
                }
            }
            for (let course of this.courseIsTaught) {
                for (let lecture of this.lecturesList) {
                    debugger;
                    if (course == lecture.courseid)
                        this.lectureToAttend.push(lecture);
                }
            }
        }

    }

    // calendarOptions: CalendarOptions = {
    //     initialView: 'dayGridMonth',
    //
    // };
    calendarOptions: CalendarOptions = {
        plugins: [dayGridPlugin],
        initialView: 'dayGridMonth'
    };

    handleDateClick(arg: { dateStr: string; }) {
        alert('date click! ' + arg.dateStr)
    }

    ngAfterViewInit(): void {
        let calendarApi = this.calendar.getApi();

        for (let attandLecture of this.lectureToAttend) {
            calendarApi.addEvent({
                id: attandLecture.id,
                title: attandLecture.name + " " + attandLecture.time,
                date: attandLecture.date,
                color: attandLecture.color
            });
        }
    }
}




