import { Component } from '@angular/core';
import { flipAnimation, pulseAnimation } from 'angular-animations';
import { mainIconsModel, otherIconsModel } from 'src/app/models/my-skills';

@Component({
  selector: 'app-my-skills',
  templateUrl: './my-skills.component.html',
  styleUrls: ['./my-skills.component.scss'],
  animations: [
    flipAnimation({ duration: 1500 }),
    pulseAnimation({ scale: 1.3 }),
  ],
})
export class MySkillsComponent {
  mainIcons: mainIconsModel[] = [
    { url: '../../../assets/icons/java.png', name: 'java' },
    { url: '../../../assets/icons/angular.png', name: 'angular' },
  ];

  otherIcons: otherIconsModel[] = [
    { url: '../../../assets/icons/bash.png', name: 'bash' },
    { url: '../../../assets/icons/bootstrap.svg', name: 'bootstrap' },
    { url: '../../../assets/icons/css.png', name: 'css' },
    { url: '../../../assets/icons/git.png', name: 'git' },
    { url: '../../../assets/icons/github.png', name: 'github' },
    { url: '../../../assets/icons/hibernate.png', name: 'hibernate' },
    { url: '../../../assets/icons/html.png', name: 'html' },
    { url: '../../../assets/icons/intellij.png', name: 'intellij' },
    { url: '../../../assets/icons/js.png', name: 'JavaScript' },
    { url: '../../../assets/icons/mysql.png', name: 'mysql' },
    { url: '../../../assets/icons/node.png', name: 'node' },
    { url: '../../../assets/icons/posgre.png', name: 'posgreSQL' },
    { url: '../../../assets/icons/postman.png', name: 'postman' },
    { url: '../../../assets/icons/sass.png', name: 'sass' },
    { url: '../../../assets/icons/spring.png', name: 'spring' },
    { url: '../../../assets/icons/thymeleaf.png', name: 'thymeleaf' },
    { url: '../../../assets/icons/typescript.png', name: 'typescript' },
  ];

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

  otherIconsChangeState(nameOfIcon: string): void {
    this.otherIconsState[nameOfIcon] = true;
    setTimeout(() => (this.otherIconsState[nameOfIcon] = false), 1);
  }

  mainIconsChangeState(nameOfIcon: string): void {
    this.mainIconsState[nameOfIcon] = true;
    setTimeout(() => (this.mainIconsState[nameOfIcon] = false), 1);
  }
}
