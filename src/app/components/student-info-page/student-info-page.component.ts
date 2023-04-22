import {Component, OnInit} from '@angular/core';
import {ViewManager} from "../../services/view-manager-service/view-manager.service";
import {LocalStorageManager} from "../../services/view-manager-service/local-storage";
import {Database} from "../../services/view-manager-service/database.service";
import {Student} from "../../models/student-list";

@Component({
    selector: 'app-student-info-page',
    templateUrl: './student-info-page.component.html',
    styleUrls: ['./student-info-page.component.css']
})
export class StudentInfoPageComponent implements OnInit {

    constructor(private viewManager: ViewManager, private localStorage: LocalStorageManager, private database: Database) {
    }

    student!: Student;

    ngOnInit(): void {
        this.viewManager.ShowMenuToolbar(true);

        let s = this.database.students.find(s => {
            return s.AM == this.localStorage.getUserID();
        });

        if (s != undefined) {
            this.student = s;
        }
    }
}
