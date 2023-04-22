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
        } as Student,
        {
            firstName: "studentFirstName1",
            lastName: "studentLastName1",
            email: "student1@gmail.com",
            AM: 21,
            phone: 12345,
            semester: "2o",
            description: "Test1",
            idCourses: [1, 2, 4, 6]
        } as Student,
        {
            firstName: "studentFirstName2",
            lastName: "studentLastName2",
            email: "student2@gmail.com",
            AM: 21,
            phone: 12345,
            semester: "2o",
            description: "Test2",
            idCourses: [1, 2, 4, 6]
        } as Student
    ]


    courses: Course[] = [
        {
            id: 1,
            name: "ΤΕΧΝΗΤΉ ΝΟΗΜΟΣΎΝΗ",
            description: "ΤΕΧΝΗΤΉ ΝΟΗΜΟΣΎΝΗ ΚΑΙ ΜΗΧΑΝΙΚΉ ΜΑΘΗΣΗ",
            professorID: 1,
        } as Course,
        {
            id: 2,
            name: "ΜΑΘΗΜΑΤΙΚΆ 1",
            description: "ΜΑΘΗΜΑΤΙΚΑ",
            professorID: 1,
        } as Course,
        {
            id: 3,
            name: "ΑΛΓΟΡΙΘΜΟΙ",
            description: "ΑΛΓΟΡΙΘΜΟΙ",
            professorID: 1,
        } as Course
    ]


    courseFiles: CourseFile[] = [
        {
            id: 1,
            courseID: 1,
            name: "ΤΕΧΝΗΤΉ ΝΟΗΜΟΣΎΝΗ ΚΕΦ.1",
            description: "ΕΙΣΑΓΩΓΙΚΟ",
        } as CourseFile
    ]


    lectures: Lectures[] = [
        {
            id: "1",
            name: "ΤΕΧΝΗΤΉ ΝΟΗΜΟΣΎΝΗ",
            date: "2023-04-08",
            time: "18:00 - 20:00",
            courseid: 1,
            color: "LightCoral"
        } as Lectures,
        {
            id: "2",
            name: "ΜΑΘΗΜΑΤΙΚΑ",
            date: "2023-04-09",
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