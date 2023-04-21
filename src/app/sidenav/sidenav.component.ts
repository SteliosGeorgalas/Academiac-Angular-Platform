import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { LocalStorageManager } from '../services/view-manager-service/local-storage';
import { ViewManager } from '../services/view-manager-service/view-manager.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  @ViewChild('drawer')
  public sidenav!: MatDrawer;
  showMenuAndToolbar: Observable<boolean> = of(false);

  isStudent: boolean = false;

  constructor(private viewManager: ViewManager, private router: Router, private localStorage: LocalStorageManager) { }

  ngOnInit(): void {
    this.showMenuAndToolbar = this.viewManager.ShowMenuAndToolbar;

    this.viewManager.ShouldToggleSideNav.subscribe(() => {
      if (this.sidenav == undefined) {
        return;
      }

      this.isStudent = this.localStorage.getUserType() == 1;
      
      this.sidenav.toggle();
    });
  }

  logout(): void {
    this.router.navigate(["/login"]);
  }

  navigateToCourseList(): void {
    this.router.navigate(["/courses"]);
  }

  navigateToTeacherCourseList(): void {
    this.router.navigate(["/teacherCourses"]);
  }

  navigateToTeacherInfo(): void {
    this.router.navigate(["/teacherInfo"]);
  }

  navigateToDashboard(): void {
    this.router.navigate(["/dashboard"]);
  }

  navigateToStudentInfo(): void {
    this.router.navigate(["/studentInfo"]);
  }
}
