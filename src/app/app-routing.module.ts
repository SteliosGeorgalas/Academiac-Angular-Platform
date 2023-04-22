import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './components/login-page/login-page.component';
import {DashboardPageComponent} from "./components/dashboard-page/dashboard-page.component";
import {CoursePageComponent} from "./components/course-page/course-page.component";
import {
  TeacherCourseListPageComponent
} from "./components/teacher-course-list-page/teacher-course-list-page.component";
import {CourseListPageComponent} from "./components/course-list-page/course-list-page.component";
import {
  TeacherPersonalInfoPageComponent
} from "./components/teacher-personal-info-page/teacher-personal-info-page.component";
import {StudentInfoPageComponent} from "./components/student-info-page/student-info-page.component";
import {StudentListPageComponent} from "./components/student-list-page/student-list-page.component";

const routes: Routes = [
  { path: 'login', component: LoginPageComponent },
  { path: 'dashboard', component: DashboardPageComponent },
  { path: 'courses', component: CourseListPageComponent },
  { path: 'teacherCourses', component: TeacherCourseListPageComponent },
  { path: 'teacherInfo', component: TeacherPersonalInfoPageComponent },
  { path: 'studentInfo', component: StudentInfoPageComponent },
  { path: 'course/:id', component: CoursePageComponent },
  { path: 'studentList/:id', component: StudentListPageComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
