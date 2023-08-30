import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-desktop',
  templateUrl: './nav-desktop.component.html',
  styleUrls: ['./nav-desktop.component.scss'],
})
export class NavDesktopComponent implements OnInit {
  listElementText: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.checkCurrentRoute();
  }

  checkCurrentRoute() {
    this.listElementText = this.router.url;
  }
}
