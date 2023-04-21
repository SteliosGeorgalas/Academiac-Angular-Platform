import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ViewManager } from '../services/view-manager-service/view-manager.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  showMenuAndToolbar: Observable<boolean> = of(false);

  constructor(private viewManager: ViewManager) { }

  ngOnInit(): void {
    this.showMenuAndToolbar = this.viewManager.ShowMenuAndToolbar;
  }

  OnMenuClicked() {
    this.viewManager.ToggleSideNav();
  }
}
