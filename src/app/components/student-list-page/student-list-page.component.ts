import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs/internal/Subscription';
import {Student} from "../../models/student-list";
import {Course} from "../../models/course";
import {ViewManager} from "../../services/view-manager-service/view-manager.service";
import {Database} from "../../services/view-manager-service/database.service";

@Component({
    selector: 'app-student-list-page',
    templateUrl: './student-list-page.component.html',
    styleUrls: ['./student-list-page.component.css']
})
export class StudentListPageComponent implements OnInit {

    studentList: Student[] = [];
    private routeSub!: Subscription;
    courseid!: number;
    course!: Course;

    constructor(private viewManager: ViewManager, private database: Database, private route: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.viewManager.ShowMenuToolbar(true);
        this.studentList = this.database.students;

        this.routeSub = this.route.params.subscribe(params => {
            this.courseid = params['id'];
            console.log(this.courseid);
        });

    }

    sendEmail(student: Student, courseid: number): void {
        let email = student.email;
        let subject = "About "; //+ course.name;
        let emailBody = "Hello mr./ms." + student.lastName + ", ....";
        location.href = "mailto:" + email + "?subject=" + subject + "&body=" + emailBody;
    }

}



