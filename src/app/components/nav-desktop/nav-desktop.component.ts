import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-desktop',
  templateUrl: './nav-desktop.component.html',
  styleUrls: ['./nav-desktop.component.scss'],
})
export class NavDesktopComponent implements OnInit {
  listElementBG: string = '';
  listElementText: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.checkCurrentRoute();
  }

  checkCurrentRoute() {
    this.listElementBG = this.router.url;
    this.listElementText = this.router.url;
  }
}
