import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Student} from "../../models/student-list";
import {Professor} from "../../models/professor";
import {Course} from "../../models/course";
import {ViewManager} from "../../services/view-manager-service/view-manager.service";
import {Database} from "../../services/view-manager-service/database.service";
import {LocalStorageManager} from "../../services/view-manager-service/local-storage";

@Component({
    selector: 'app-course-list-page',
    templateUrl: './course-list-page.component.html',
    styleUrls: ['./course-list-page.component.css']
})
export class CourseListPageComponent implements OnInit {
    student?: Student;
    professors: Professor[] = [];
    courses: Course[] = [];
    coursesUI: CourseUiModel[] = [];
    userID!: number;

    constructor(private viewManager: ViewManager, private router: Router, private database: Database, private localStorage: LocalStorageManager) {
    }

    ngOnInit(): void {
        this.viewManager.ShowMenuToolbar(true);

        this.userID = this.localStorage.getUserID();
        this.student = this.database.students.find(s => {
            return s.AM == this.userID;
        });

        this.courses = this.database.courses;
        this.professors = this.database.professors;

        this.courses.forEach(course => {
            let p = this.professors.find(professor => {
                return professor.id == course.professorID;
            })

            if (p != undefined) {
                let courseUIModel = {
                    id: course.id,
                    name: course.name,
                    description: course.description,
                    professorID: course.professorID,
                    professorFirstName: p.firstName,
                    professorLastName: p.lastName
                } as CourseUiModel

                let subscribedID = this.student?.idCourses.find(subscribedCourseID => {
                    return course.id == subscribedCourseID;
                })

                courseUIModel.isSubscribed = subscribedID != undefined;

                this.coursesUI.push(courseUIModel);
            }
        });
    }

    subscribe(course: Course): void {
        this.coursesUI.forEach(c => {
            if (c.id == course.id) {
                c.isSubscribed = true;

                if (this.student == undefined) {
                    return;
                }

                this.student?.idCourses.push(c.id);
            }
        })
    }

    unsubscribe(course: Course): void {
        this.coursesUI.forEach(c => {
            if (c.id == course.id) {
                c.isSubscribed = false;
                const index = this.student?.idCourses.indexOf(c.id, 0);

                if (this.student == undefined) {
                    return;
                }

                if (index == undefined) {
                    return;
                }

                if (index > -1) {
                    this.student?.idCourses.splice(index, 1);
                }
            }
        })
    }

    unsubscribeFromCourseList(course: Course): void {
        this.coursesUI.forEach(c => {
            if (c.id == course.id) {
                c.isSubscribed = false;

                if (this.student == undefined) {
                    return;
                }

                const index = this.student?.idCourses.indexOf(c.id, 0);
                if (index == undefined) {
                    return;
                }

                if (index > -1) {
                    this.student?.idCourses.splice(index, 1);
                }
            }
        })
    }

    sendEmail(course: Course): void {
        let id = course.professorID;
        let professor = this.professors.find(professor => {
            return professor.id == id;
        });

        if (professor == undefined) {
            return;
        }

        let email = professor.email;
        let subject = "About " + course.name;
        let emailBody = "Hello mr." + professor.lastName + ", ....";
        location.href = "mailto:" + email + "?subject=" + subject + "&body=" + emailBody;
    }

    navigateToCourse(course: Course): void {
        this.router.navigate(['/course', course.id]);
    }

    navigateToCourseFromSubscribed(course: Course): void {
        this.router.navigate(['/course', course.id]);
    }
}

export interface CourseUiModel {
    id: number;
    name: string;
    description: string;
    professorID: number;
    isSubscribed: boolean;
    professorFirstName: string;
    professorLastName: string;
}
