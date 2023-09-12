import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription, filter } from 'rxjs';

@Component({
  selector: 'app-nav-desktop',
  templateUrl: './nav-desktop.component.html',
  styleUrls: ['./nav-desktop.component.scss'],
})
export class NavDesktopComponent implements OnInit, OnDestroy {
  listElementText: string = '';
  routerListner!: Subscription;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.checkCurrentRoute();
    this.routerListner = this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event) => {
        this.listElementText = this.router.url;
      });
  }

  ngOnDestroy(): void {
    this.routerListner.unsubscribe();
  }

  checkCurrentRoute() {
    this.listElementText = this.router.url;
  }
}
