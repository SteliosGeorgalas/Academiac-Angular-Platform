import {Component, OnInit} from '@angular/core';
import {ViewManager} from '../services/view-manager-service/view-manager.service';
import {Router} from '@angular/router';
import {LocalStorageManager} from '../services/view-manager-service/local-storage';
import {Database} from '../services/view-manager-service/database.service';

@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

    invalidCredentials = false;
    email: string = '';
    password: string = '';

    constructor(private viewManager: ViewManager, private router: Router, private localStorage: LocalStorageManager, private database: Database) {
    }

    ngOnInit(): void {
        this.viewManager.ShowMenuToolbar(false);
    }

    login(): void {

        if (this.email == "" || this.password == "") {
            this.invalidCredentials = true;
            return;
        }

        const s = this.database.students.find(student => {
            return student.email == this.email;
        });

        if (s != undefined) {
            this.router.navigate(["/dashboard"]);
            this.localStorage.setUserType(1);
            this.localStorage.setUserID(s.AM);
            return;
        }

        const p = this.database.professors.find(professor => {
            return professor.email == this.email;
        });

        if (p != undefined) {
            this.router.navigate(["/dashboard"]);
            this.localStorage.setUserType(2);
            this.localStorage.setUserID(p.id);
            return;
        }

        this.invalidCredentials = true;
    }
}
