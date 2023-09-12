import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { flipAnimation, pulseAnimation } from 'angular-animations';
import {
  mainIconsModel,
  otherIconsModel,
  otherIconsResolveModel,
  otherIconsResolveUrlModel,
} from 'src/app/models/my-skills';

@Component({
  selector: 'app-my-skills',
  templateUrl: './my-skills.component.html',
  styleUrls: ['./my-skills.component.scss'],
  animations: [
    flipAnimation({ duration: 1500 }),
    pulseAnimation({ scale: 1.3 }),
  ],
})
export class MySkillsComponent implements OnInit {
  mainIcons: mainIconsModel[] = [
    { url: './assets/icons/java.png', name: 'java' },
    { url: './assets/icons/angular.png', name: 'angular' },
  ];

  otherIcons: otherIconsResolveUrlModel[] = [];

  mainIconsState: { [key: string]: boolean } = {
    java: false,
    angular: false,
  };

  otherIconsState: { [key: string]: boolean } = {
    bash: false,
    bootstrap: false,
    css: false,
    git: false,
    github: false,
    hibernate: false,
    html: false,
    intellij: false,
    js: false,
    mysql: false,
    node: false,
    posgre: false,
    postman: false,
    sass: false,
    spring: false,
    thymeleaf: false,
    typescript: false,
  };

  constructor(private activatedRoute: ActivatedRoute) {}

  testImg!: any;

  ngOnInit(): void {
    this.loadIcons();
  }

  loadIcons(): void {
    this.otherIcons = this.activatedRoute.snapshot.data['icons'];
  }

  otherIconsChangeState(nameOfIcon: string): void {
    this.otherIconsState[nameOfIcon] = true;
    setTimeout(() => (this.otherIconsState[nameOfIcon] = false), 1);
  }

  mainIconsChangeState(nameOfIcon: string): void {
    this.mainIconsState[nameOfIcon] = true;
    setTimeout(() => (this.mainIconsState[nameOfIcon] = false), 1);
  }
}
