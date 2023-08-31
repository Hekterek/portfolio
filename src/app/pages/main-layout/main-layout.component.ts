import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
})
export class MainLayoutComponent implements OnInit {
  // currentColor: string = 'rgba(214, 48, 48, 0.87)';
  lightColor: string = `background: linear-gradient(
    200deg,
    rgba(214, 48, 48, 0.87),
    rgba(255, 255, 255, 0) 70%
  );`;

  colorsBG: string[] = [
    'rgba(255, 255, 255, 0.87)',
    'rgba(214, 48, 48, 0.87)',
    'rgba(95, 255, 20, 0.87)',
    'rgba(231, 255, 20, 0.87)',
    'rgba(20, 255, 255, 0.87)',
    'rgba(20, 130, 255, 0.87)',
    'rgba(130, 20, 255, 0.87)',
    'rgba(216, 20, 255, 0.87)',
    'rgba(255, 20, 196, 0.87)',
    'rgba(255, 20, 51, 0.87)',
  ];

  position: any = '';
  viewportWidth: number = 0;
  viewportHeight: number = 0;

  ngOnInit(): void {
    this.getScreenSize();
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
    const randomColorNum = Math.floor(Math.random() * this.colorsBG.length);
    console.log(randomColorNum);

    this.lightColor = `background: linear-gradient(
      200deg,
      ${this.colorsBG[randomColorNum]},
      rgba(255, 255, 255, 0) 70%
    );`;
    // console.log(this.currentColor);
  }
}
