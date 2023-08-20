import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navMobile',
  templateUrl: './navMobile.component.html',
  styleUrls: ['./navMobile.component.scss'],
})
export class NavMobileComponent implements OnInit {
  protected menuIsOpen: boolean = false;

  menuSlider: { [key: string]: boolean } = {
    1: false,
    2: false,
    3: false,
    4: false,
  };

  ngOnInit(): void {
    // this.menuIntervalOpen();
  }

  timeoutFunction(el: string, value: boolean, time: number) {
    setTimeout(() => {
      this.menuSlider[el] = value;
    }, time);
  }

  menuIntervalOpen() {
    for (const el in this.menuSlider) {
      if (el === '1') {
        this.timeoutFunction(el, true, 300);
      } else if (el === '2') {
        this.timeoutFunction(el, true, 500);
      } else if (el === '3') {
        this.timeoutFunction(el, true, 700);
      } else if (el === '4') {
        this.timeoutFunction(el, true, 900);
      }
    }
  }

  menuIntervalClose() {
    for (const el in this.menuSlider) {
      if (el === '1') {
        this.timeoutFunction(el, false, 0);
      } else if (el === '2') {
        this.timeoutFunction(el, false, 200);
      } else if (el === '3') {
        this.timeoutFunction(el, false, 300);
      } else if (el === '4') {
        this.timeoutFunction(el, false, 400);
      }
    }
  }
}
