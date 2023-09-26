import { Component, HostListener, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  NavigationEnd,
  Params,
  Route,
  Router,
} from '@angular/router';
import { Observable, filter, map } from 'rxjs';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
})
export class MainLayoutComponent implements OnInit {
  routerListner!: any;
  currentRoute!: any;
  lightColor: string = `background: linear-gradient(
    200deg,
    rgba(20, 82, 115, 0.87),
    rgba(255, 255, 255, 0) 50%
  );`;
  currentLightIndex: number = 0;

  colorBG: string = `background: radial-gradient(rgb(20, 82, 115) 0%, #000000 90%)`;

  lightColors: string[] = [
    'rgba(20, 82, 115, 0.87)',
    'rgba(214, 48, 48, 0.87)',
    'rgba(95, 255, 20, 0.60)',
    'rgba(231, 255, 20, 0.60)',
    'rgba(20, 255, 255, 0.60)',
    'rgba(20, 130, 255, 0.87)',
    'rgba(130, 20, 255, 0.87)',
    'rgba(216, 20, 255, 0.87)',
    'rgba(255, 20, 196, 0.87)',
    'rgba(255, 20, 51, 0.87)',
  ];

  position: any = '';
  viewportWidth: number = 0;
  viewportHeight: number = 0;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.checkCurrentRoute();
    this.getScreenSize();
  }

  checkCurrentRoute() {
    this.routerListner = this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event) => {
        this.currentRoute = this.router.url;
      });
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize() {
    this.viewportHeight = window.innerHeight;
    this.viewportWidth = window.innerWidth;
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove(e: any) {
    this.position = `${e.clientX / 20 - this.viewportWidth / 35}px ${
      e.clientY / 20 - this.viewportHeight / 35
    }px`;
  }

  changeLightColor() {
    this.currentLightIndex++;
    if (this.currentLightIndex == this.lightColors.length) {
      this.currentLightIndex = 0;
    }

    this.lightColor = `background: linear-gradient(
      200deg,
      ${this.lightColors[this.currentLightIndex]} ,
      rgba(255, 255, 255, 0) 50%
    );`;

    this.colorBG = `background: radial-gradient(${
      this.lightColors[this.currentLightIndex]
    } 0%, #000000 90%)`;
  }
}
