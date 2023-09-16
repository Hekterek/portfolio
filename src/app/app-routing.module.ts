import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { AboutmeComponent } from './pages/aboutme/aboutme.component';
import { MySkillsComponent } from './pages/myskills/my-skills.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ContactComponent } from './pages/contact/contact.component';
import { MainLayoutComponent } from './pages/main-layout/main-layout.component';
import { image } from './services/aboutme.service';
import { iconsResolve } from './services/my-skills.service';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', component: WelcomeComponent, pathMatch: 'full' },
      {
        path: 'aboutme',
        component: AboutmeComponent,
        resolve: { imageData: image },
      },
      {
        path: 'skills',
        component: MySkillsComponent,
        resolve: { icons: iconsResolve },
      },
      { path: 'projects', component: ProjectsComponent },
      { path: 'contact', component: ContactComponent },
    ],
  },

  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
