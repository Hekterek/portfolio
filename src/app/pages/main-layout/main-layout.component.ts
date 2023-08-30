import { Component, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
})
export class MainLayoutComponent implements OnInit {
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
    // console.log(this.viewportHeight, this.viewportWidth);
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove(e: any) {
    // console.log(e);

    this.position = `${e.clientX / 20 - this.viewportWidth / 35}px ${
      e.clientY / 20 - this.viewportHeight / 35
    }px`;
  }

  // @ViewChild('layout') ;
}
