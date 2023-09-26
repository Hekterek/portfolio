import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  projects: any = [
    {
      name: 'IntelliFin',
      desc: `Financial intelligence is a very important skill for every person. The InteliFin application solves the problem of money management and leads to achieving your financial goals as quickly as possible.`,
      imgUrl: './assets/projectsImg/image.jpg',
      buttonValue: 'In progress',
      done: true,
    },
  ];
}
