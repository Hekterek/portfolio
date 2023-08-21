import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavMobileComponent } from './navMobile/navMobile.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [NavMobileComponent],
  imports: [CommonModule, RouterModule],
  exports: [NavMobileComponent],
})
export class ComponentsModule {}
