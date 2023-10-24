import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavMobileComponent } from './navMobile/navMobile.component';
import { RouterModule } from '@angular/router';
import { NavDesktopComponent } from './nav-desktop/nav-desktop.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [NavMobileComponent, NavDesktopComponent, FooterComponent],
  imports: [CommonModule, RouterModule],
  exports: [NavMobileComponent, NavDesktopComponent, FooterComponent],
})
export class ComponentsModule {}
