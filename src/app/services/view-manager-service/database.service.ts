import {Injectable} from '@angular/core';
import {Professor} from 'src/app/models/professor';
import {Student} from "../../models/student-list";
import {Course} from "../../models/course";
import {Lectures} from "../../models/lecture";
import {CourseAnnouncment, CourseFile} from "../../models/course-file";

@Injectable({
    providedIn: 'root'
})
export class Database {
    constructor() {
    }

    professors: Professor[] = [
        {
            id: 1,
            firstName: "professorName",
            lastName: "professorLastName",
            email: "professor@gmail.com",
            profession: "",
        } as Professor
    ]


    students: Student[] = [
        {
            firstName: "studentFirstName",
            lastName: "studentLastName",
            email: "student@gmail.com",
            AM: 2,
            phone: 12345,
            semester: "1o",
            description: "Test",
            idCourses: [1, 2, 4, 6]
        } as Student
    ]


    courses: Course[] = [
        {
            id: 1,
            name: "ΕΙΣΑΓΩΓΗ ΣΤΟΝ ΠΡΟΓΡΑΜΜΑΤΙΣΜΟ",
            description: "ΒΑΣΙΚΕΣ ΑΡΧΕΣ ΑΝΤΙΚΕΙΜΕΝΟΣΤΡΑΦΟΥΣ ΠΡΟΓΡΑΜΜΑΤΙΣΜΟΥ",
            professorID: 1,
        } as Course
    ]


    courseFiles: CourseFile[] = [
        {
            id: 1,
            courseID: 1,
            name: "ΠΡΟΓΡΑΜΜΑΤΙΣΜΟΣ ΚΕΦ.1",
            description: "ΕΙΣΑΓΩΓΙΚΟ ΚΕΦΑΛΑΙΟ",
        } as CourseFile
    ]


    lectures: Lectures[] = [
        {
            id: "1",
            name: "ΕΙΣΑΓΩΓΗ ΣΤΗ JAVA",
            date: "2023-04-08",
            time: "18:00 - 20:00",
            courseid: 1,
            color: "LightCoral"
        } as Lectures
    ]

    announcements: CourseAnnouncment[] = [
        {
            id: 1,
            courseID: 1,
            date: "05-10-2023",
            announcment: "This an announcment from the course with id 1"
        }
    ]
}