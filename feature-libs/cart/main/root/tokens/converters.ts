import { InjectionToken } from '@angular/core';
import { Converter } from '@spartacus/core';
import {
  Cart,
  CartModification,
  SaveCartResult,
  Voucher,
} from '../models/cart.model';

export const CART_NORMALIZER = new InjectionToken<Converter<any, Cart>>(
  'CartNormalizer'
);

export const CART_MODIFICATION_NORMALIZER = new InjectionToken<
  Converter<any, CartModification>
>('CartModificationNormalizer');

export const SAVE_CART_NORMALIZER = new InjectionToken<
  Converter<any, SaveCartResult>
>('SaveCartNormalizer');

export const CART_VOUCHER_NORMALIZER = new InjectionToken<
  Converter<any, Voucher>
>('CartVoucherNormalizer');
