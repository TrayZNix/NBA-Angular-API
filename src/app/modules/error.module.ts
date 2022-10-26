import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorComponent } from '../components/error/error.component';
import { MaterialImportsModule } from './material-imports.module';

@NgModule({
  declarations: [ErrorComponent],
  imports: [CommonModule, MaterialImportsModule],
  exports: [ErrorComponent],
})
export class ErrorModule {}
