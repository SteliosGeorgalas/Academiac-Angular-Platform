import {HttpClient} from '@angular/common/http';
import {Component, OnInit} from '@angular/core';
import {Professor} from "../../models/professor";
import {ViewManager} from "../../services/view-manager-service/view-manager.service";
import {Database} from "../../services/view-manager-service/database.service";
import {LocalStorageManager} from "../../services/view-manager-service/local-storage";

@Component({
    selector: 'app-teacher-personal-info-page',
    templateUrl: './teacher-personal-info-page.component.html',
    styleUrls: ['./teacher-personal-info-page.component.css']
})
export class TeacherPersonalInfoPageComponent implements OnInit {

    constructor(private http: HttpClient, private viewManager: ViewManager, private database: Database, private localStorage: LocalStorageManager) {
    }

    professor!: Professor;

    ngOnInit(): void {
        this.viewManager.ShowMenuToolbar(true);

        let p = this.database.professors.find(p => {
            return p.id == this.localStorage.getUserID();
        });

        if (p != undefined) {
            this.professor = p;
        }
    }

    open(): void {
        const opt = {responseType: 'blob'};
        this.http.get('/assets/test.pdf', {responseType: 'blob'}).subscribe(data => {
            var fileURL = window.URL.createObjectURL(data);
            window.open(fileURL);
        });
    }
}
