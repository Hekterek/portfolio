import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navMobile',
  templateUrl: './navMobile.component.html',
  styleUrls: ['./navMobile.component.scss'],
})
export class NavMobileComponent implements OnInit {
  protected menuIsOpen: boolean = false;

  menuBtnDisable: boolean = false;

  menuSlider: { [key: string]: boolean } = {
    1: false,
    2: false,
    3: false,
    4: false,
  };

  underLineSliderSlide: { [key: string]: boolean } = {
    1: false,
    2: false,
    3: false,
    4: false,
  };

  constructor(private router: Router) {}

  ngOnInit(): void {
    // this.menuIntervalOpen();
  }

  menuSwitch() {
    this.menuBtnDisable = !this.menuBtnDisable;
    setTimeout(() => {
      this.menuBtnDisable = !this.menuBtnDisable;
    }, 800);
  }

  menuSliderTimeout(el: string, value: boolean, time: number) {
    setTimeout(() => {
      this.menuSlider[el] = value;
    }, time);
  }

  underLineSliderTimeout(el: string, value: boolean, time: number) {
    setTimeout(() => {
      this.underLineSliderSlide[el] = value;
    }, time + 200);
  }

  menuIntervalOpen() {
    this.menuSwitch();
    for (const el in this.menuSlider) {
      if (el === '1') {
        this.menuSliderTimeout(el, true, 50);
        this.underLineSliderTimeout(el, true, 50);
      } else if (el === '2') {
        this.menuSliderTimeout(el, true, 100);
        this.underLineSliderTimeout(el, true, 100);
      } else if (el === '3') {
        this.menuSliderTimeout(el, true, 150);
        this.underLineSliderTimeout(el, true, 150);
      } else if (el === '4') {
        this.menuSliderTimeout(el, true, 200);
        this.underLineSliderTimeout(el, true, 200);
      }
    }
  }

  menuIntervalClose() {
    this.menuSwitch();
    for (const el in this.menuSlider) {
      if (el === '1') {
        this.menuSliderTimeout(el, false, 0);
        this.underLineSliderTimeout(el, false, -100);
      } else if (el === '2') {
        this.menuSliderTimeout(el, false, 100);
        this.underLineSliderTimeout(el, false, -100);
      } else if (el === '3') {
        this.menuSliderTimeout(el, false, 200);
        this.underLineSliderTimeout(el, false, -200);
      } else if (el === '4') {
        this.menuSliderTimeout(el, false, 300);
        this.underLineSliderTimeout(el, false, -300);
      }
    }
  }

  closeMenuAndNavigate(link: string) {
    this.menuIntervalClose();
    this.router.navigate([link]);
  }
}
