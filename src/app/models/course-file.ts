export interface CourseAnnouncment {
    id: number;
    date: string;
    announcment: string;
    courseID: number;
}

export interface CourseFile {
    id: number;
    courseID: number;
    name: string;
    description: string;
}

export interface AnnouncmentUiModel {
    date: string;
    announcement: string;
}