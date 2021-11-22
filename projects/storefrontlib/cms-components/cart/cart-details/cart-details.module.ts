import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  CmsConfig,
  FeaturesConfigModule,
  I18nModule,
  provideConfig,
  provideDefaultConfig,
  UrlModule,
} from '@spartacus/core';
import { PromotionsModule } from '../../misc/promotions/promotions.module';
import { CartCouponModule } from '../cart-coupon/cart-coupon.module';
import { CartSharedModule } from '../cart-shared/cart-shared.module';
import { CartDetailsComponent } from './cart-details.component';
import { CartValidationWarningsModule } from '../validation/cart-warnings/cart-validation-warnings.module';
import { ClearCartDialogModule } from '../clear-cart-form-dialog/clear-cart-dialog.module';
import { defaultClearCartLayoutConfig } from '../clear-cart-form-dialog';

@NgModule({
  imports: [
    CartSharedModule,
    CommonModule,
    CartCouponModule,
    RouterModule,
    UrlModule,
    PromotionsModule,
    FeaturesConfigModule,
    I18nModule,
    CartValidationWarningsModule,
    ClearCartDialogModule,
  ],
  providers: [
    provideDefaultConfig(<CmsConfig>{
      cmsComponents: {
        CartComponent: {
          component: CartDetailsComponent,
        },
      },
    }),
    [provideConfig(defaultClearCartLayoutConfig)],
  ],
  declarations: [CartDetailsComponent],
  exports: [CartDetailsComponent],
})
export class CartDetailsModule {}
