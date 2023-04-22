import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Database } from '../../services/view-manager-service/database.service';
import { LocalStorageManager } from '../../services/view-manager-service/local-storage';
import { ViewManager } from '../../services/view-manager-service/view-manager.service';
import {Course} from "../../models/course";

@Component({
  selector: 'app-teacher-course-list-page',
  templateUrl: './teacher-course-list-page.component.html',
  styleUrls: ['./teacher-course-list-page.component.css']
})
export class TeacherCourseListPageComponent implements OnInit {
  courses: Course[] = [];
  constructor(private localStorage: LocalStorageManager, private viewManager: ViewManager, private router: Router, private database: Database) { }

  ngOnInit(): void {
    const id = this.localStorage.getUserID();
    this.viewManager.ShowMenuToolbar(true);
    this.courses = this.database.courses.filter(course => {
      return course.professorID == id;
    });
  }

  navigateToCourse(course: Course): void {
    this.router.navigate(['/course', course.id]);
  }

  navigateToSubsStudents(course: Course): void  {
    this.router.navigate(['/studentList', course.id])
  }
}
