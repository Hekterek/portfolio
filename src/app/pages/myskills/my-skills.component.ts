import { Component } from '@angular/core';

@Component({
  selector: 'app-my-skills',
  templateUrl: './my-skills.component.html',
  styleUrls: ['./my-skills.component.scss'],
})
export class MySkillsComponent {
  mainIcons: string[] = [
    '../../../assets/icons/java.png',
    '../../../assets/icons/angular.png',
  ];

  otherIcons: string[] = [
    '../../../assets/icons/bash.png',
    '../../../assets/icons/bootstrap.svg',
    '../../../assets/icons/css.png',
    '../../../assets/icons/git.png',
    '../../../assets/icons/github.png',
    '../../../assets/icons/hibernate.png',
    '../../../assets/icons/html.png',
    '../../../assets/icons/intellij.png',
    '../../../assets/icons/js.png',
    '../../../assets/icons/mysql.png',
    '../../../assets/icons/node.png',
    '../../../assets/icons/posgre.png',
    '../../../assets/icons/postman.png',
    '../../../assets/icons/sass.png',
    '../../../assets/icons/spring.png',
    '../../../assets/icons/thymeleaf.png',
    '../../../assets/icons/typescript.png',
  ];
}
