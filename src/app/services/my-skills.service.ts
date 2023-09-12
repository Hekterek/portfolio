import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import {
  otherIconsModel,
  otherIconsResolveModel,
  otherIconsResolveUrlModel,
} from '../models/my-skills';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MySkillsService {
  constructor() {}
}

export const iconsResolve: ResolveFn<otherIconsResolveUrlModel[]> = () => {
  const http = inject(HttpClient);
  const allIcons: otherIconsResolveUrlModel[] = [];

  const otherIcons: otherIconsModel[] = [
    { url: '../../assets/icons/bash.png', name: 'bash' },
    { url: '../../assets/icons/bootstrap.svg', name: 'bootstrap' },
    { url: './assets/icons/css.png', name: 'css' },
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

  for (let icon of otherIcons) {
    let iconUrl: string = '';

    http.get(icon.url, { responseType: 'blob' }).subscribe((el) => {
      iconUrl = URL.createObjectURL(el);

      allIcons.push({
        imgBlob: iconUrl,
        name: icon.name,
      });
    });
  }

  return allIcons;
};
