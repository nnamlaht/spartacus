import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { I18nModule } from '@spartacus/core';
import { IconModule } from '../../misc/icon/icon.module';
import { ClearCartDialogComponent } from './clear-cart-dialog.component';

@NgModule({
  imports: [CommonModule, I18nModule, IconModule],
  declarations: [ClearCartDialogComponent],
  exports: [ClearCartDialogComponent],
})
export class ClearCartDialogModule {}
