import { Component, OnInit } from '@angular/core';
import { bounceAnimation, hueRotateAnimation } from 'angular-animations';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
  animations: [bounceAnimation(), hueRotateAnimation()],
})
export class WelcomeComponent implements OnInit {
  lastAnimatedLetterIndex!: number;
  titleFirst: string[] = ['H', 'i', ' ', '!'];
  titleSecond: string[] = ['I', "'", 'm', ' ', 'K', 'a', 'r', 'o', 'l', ','];
  titleThird: string[] = [
    'W',
    'e',
    'b',
    ' ',
    'D',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
  ];

  titleTotalLength: number =
    this.titleFirst.length + this.titleSecond.length + this.titleThird.length;

  animatedLetters: boolean[] = Array(this.titleTotalLength).fill(false);

  constructor() {}

  ngOnInit(): void {
    setInterval(() => this.animateLetters(), 1500);
  }

  animateLetters(): void {
    const letterIndex = Math.floor(Math.random() * this.titleTotalLength);

    if (this.lastAnimatedLetterIndex !== letterIndex) {
      this.lastAnimatedLetterIndex = letterIndex;
      this.animatedLetters[letterIndex] = true;
      setTimeout(() => (this.animatedLetters[letterIndex] = false), 0);
    } else this.animateLetters();
  }
}
