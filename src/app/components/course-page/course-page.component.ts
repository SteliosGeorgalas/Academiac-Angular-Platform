import {DatePipe} from '@angular/common';
import {HttpClient} from '@angular/common/http';
import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {ActivatedRoute} from '@angular/router';
import {Database} from '../../services/view-manager-service/database.service';
import {LocalStorageManager} from '../../services/view-manager-service/local-storage';
import {ViewManager} from '../../services/view-manager-service/view-manager.service';
import {AnnouncmentUiModel, CourseFile} from "../../models/course-file";

@Component({
    selector: 'app-course-page',
    templateUrl: './course-page.component.html',
    styleUrls: ['./course-page.component.css'],
    providers: [DatePipe]
})
export class CoursePageComponent implements OnInit, AfterViewInit {
    announcment: string = "";
    isStudent: boolean = true;
    courseAnnouncments: AnnouncmentUiModel[] = []
    files: CourseFile[] = [];
    id!: number;

    displayedColumns: string[] = ['Date', 'Announcement'];
    dataSource = new MatTableDataSource<AnnouncmentUiModel>(this.courseAnnouncments);

    @ViewChild(MatPaginator) paginator!: MatPaginator;

    constructor(private route: ActivatedRoute, private localStorage: LocalStorageManager, private database: Database, private viewManager: ViewManager, private datePipe: DatePipe, private http: HttpClient) {
    }

    ngOnInit(): void {
        this.id = Number(this.route.snapshot.paramMap.get('id'));
        this.files = this.database.courseFiles.filter(file => {
            return file.courseID == this.id;
        });
        this.viewManager.ShowMenuToolbar(true);
        this.isStudent = this.localStorage.getUserType() == 1

        this.database.announcements.forEach(a => {
            if (a.courseID == this.id) {
                const announce: AnnouncmentUiModel = {date: a.date, announcement: a.announcment};
                this.courseAnnouncments.push(announce);
            }
        })

        console.log(this.courseAnnouncments);
    }

    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
    }

    post(): void {
        var myDate = new Date();
        //console.log(this.datePipe.transform(myDate, 'dd-MM-yyyy') + " " + this.announcment);
        this.courseAnnouncments.unshift({
            date: this.datePipe.transform(myDate, 'dd-MM-yyyy'),
            announcement: this.announcment
        } as AnnouncmentUiModel);
        this.dataSource.data = this.courseAnnouncments;
    }

    open(file: CourseFile): void {
        const opt = {responseType: 'blob'};
        this.http.get('/assets/test.pdf', {responseType: 'blob'}).subscribe(data => {
            var fileURL = window.URL.createObjectURL(data);
            window.open(fileURL);
        });
    }

    delete(file: CourseFile): void {
        this.files = this.files.filter(courseFile => {
            return courseFile.id != file.id;
        });
    }

    onChange(event: any) {
        //console.log(event.target.files[0]);
        var file: CourseFile = {
            id: Math.floor(Math.random() * (999 - 20 + 1) + 20),
            courseID: this.id,
            name: event.target.files[0].name,
            description: ""
        };
        //console.log(file);
        this.files.unshift(file);
    }
}

