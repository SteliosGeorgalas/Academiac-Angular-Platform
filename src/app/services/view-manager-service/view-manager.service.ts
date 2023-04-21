import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ViewManager {
    private showMenuAndToolbar = new BehaviorSubject<boolean>(false);
    private toggleSideNav = new BehaviorSubject<any>(null);

    get ShowMenuAndToolbar() {
        return this.showMenuAndToolbar.asObservable();
    }

    get ShouldToggleSideNav() {
        return this.toggleSideNav.asObservable();
    }

    constructor(private router: Router) { }

    ShowMenuToolbar(show: boolean) {
        this.showMenuAndToolbar.next(show);
    }

    ToggleSideNav() {
        this.toggleSideNav.next(null);
    }

    RedirectToLoginPage() {
        this.ShowMenuToolbar(false);
        this.router.navigate(['/login']);
    }
}