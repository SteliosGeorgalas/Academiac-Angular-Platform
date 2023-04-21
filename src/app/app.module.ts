import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginPageComponent} from "./login-page/login-page.component";
import {FormsModule} from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {ToolbarComponent} from "./toolbar/toolbar.component";
import {SidenavComponent} from "./sidenav/sidenav.component";
import {MatDividerModule} from "@angular/material/divider";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatButtonModule} from "@angular/material/button";
import {NgOptimizedImage} from "@angular/common";
import {CoursePageComponent} from "./course-page/course-page.component";
import {MatTabsModule} from "@angular/material/tabs";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {DashboardPageComponent} from "./dashboard-page/dashboard-page.component";
import {FullCalendarModule} from "@fullcalendar/angular";
import {MatDialogModule} from "@angular/material/dialog";

@NgModule({
    declarations: [
        AppComponent,
        LoginPageComponent,
        ToolbarComponent,
        CoursePageComponent,
        SidenavComponent,
        DashboardPageComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatCardModule,
        MatInputModule,
        MatDialogModule,
        MatIconModule,
        MatDividerModule,
        MatSidenavModule,
        MatButtonModule,
        NgOptimizedImage,
        MatTabsModule,
        MatTableModule,
        MatPaginatorModule,
        FullCalendarModule
    ],
    providers: [],
    bootstrap: [AppComponent],
})

export class AppModule {
}
