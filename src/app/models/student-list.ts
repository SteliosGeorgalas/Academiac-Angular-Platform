export interface StudentList {
    student: Student;
}

export interface Student {
    firstName   : string;
    lastName    : string;
    email       : string;
    AM          : number;
    phone       : number;
    semester    : string;
    description : string;
    idCourses   : number [];
}