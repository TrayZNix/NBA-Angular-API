import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../components/header/header.component';
import { MaterialImportsModule } from './material-imports.module';
import { RouterModule } from '@angular/router';
import { FlexModule } from '@angular/flex-layout';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, MaterialImportsModule, RouterModule, FlexModule],
  exports: [HeaderComponent],
})
export class HeaderModule {}
