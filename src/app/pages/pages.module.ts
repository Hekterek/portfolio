import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectsComponent } from './projects/projects.component';
import { MySkillsComponent } from './myskills/my-skills.component';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  declarations: [
    WelcomeComponent,
    AboutmeComponent,
    ContactComponent,
    ProjectsComponent,
    MySkillsComponent,
  ],
  imports: [CommonModule, ComponentsModule],
})
export class PagesModule {}
