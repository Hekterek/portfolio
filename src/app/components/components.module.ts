import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavMobileComponent } from './navMobile/navMobile.component';
import { RouterModule } from '@angular/router';
import { NavDesktopComponent } from './nav-desktop/nav-desktop.component';

@NgModule({
  declarations: [NavMobileComponent, NavDesktopComponent],
  imports: [CommonModule, RouterModule],
  exports: [NavMobileComponent, NavDesktopComponent],
})
export class ComponentsModule {}
