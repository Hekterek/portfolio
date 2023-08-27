import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavMobileComponent } from './navMobile/navMobile.component';
import { RouterModule } from '@angular/router';
import { NavDesktopComponent } from './nav-desktop/nav-desktop.component';
import { PresentationPageComponent } from './presentation-page/presentation-page.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    NavMobileComponent,
    NavDesktopComponent,
    PresentationPageComponent,
    FooterComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    NavMobileComponent,
    NavDesktopComponent,
    PresentationPageComponent,
    FooterComponent,
  ],
})
export class ComponentsModule {}
