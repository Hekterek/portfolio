import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectsComponent } from './projects/projects.component';
import { MySkillsComponent } from './myskills/my-skills.component';
import { ComponentsModule } from '../components/components.module';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    WelcomeComponent,
    AboutmeComponent,
    ContactComponent,
    ProjectsComponent,
    MySkillsComponent,
    MainLayoutComponent,
  ],
  imports: [CommonModule, ComponentsModule, RouterModule],
})
export class PagesModule {}
