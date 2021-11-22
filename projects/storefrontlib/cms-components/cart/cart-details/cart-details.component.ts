import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  ViewContainerRef,
} from '@angular/core';
import {
  ActiveCartService,
  AuthService,
  Cart,
  OrderEntry,
  PromotionLocation,
  RoutingService,
  SelectiveCartService,
} from '@spartacus/core';
import { combineLatest, Observable, of, Subscription } from 'rxjs';
import { filter, map, tap, take } from 'rxjs/operators';
import { LaunchDialogService } from '../../../layout/launch-dialog/services/launch-dialog.service';
import { LAUNCH_CALLER } from '../../../layout/launch-dialog/config/launch-config';

@Component({
  selector: 'cx-cart-details',
  templateUrl: './cart-details.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartDetailsComponent implements OnInit {
  cart$: Observable<Cart>;
  entries$: Observable<OrderEntry[]>;
  cartLoaded$: Observable<boolean>;
  loggedIn = false;
  clearMode = false;
  promotionLocation: PromotionLocation = PromotionLocation.ActiveCart;
  selectiveCartEnabled: boolean;

  private subscription = new Subscription();

  @ViewChild('element') element: ElementRef;

  constructor(
    protected activeCartService: ActiveCartService,
    protected selectiveCartService: SelectiveCartService,
    protected authService: AuthService,
    protected routingService: RoutingService,
    protected vcr: ViewContainerRef,
    protected launchDialogService: LaunchDialogService
  ) {}

  ngOnInit() {
    this.cart$ = this.activeCartService.getActive();

    this.entries$ = this.activeCartService
      .getEntries()
      .pipe(filter((entries) => entries.length > 0));

    this.selectiveCartEnabled = this.selectiveCartService.isEnabled();

    this.cartLoaded$ = combineLatest([
      this.activeCartService.isStable(),
      this.selectiveCartEnabled
        ? this.selectiveCartService.isStable()
        : of(false),
      this.authService.isUserLoggedIn(),
    ]).pipe(
      tap(([, , loggedIn]) => (this.loggedIn = loggedIn)),
      map(([cartLoaded, sflLoaded, loggedIn]) =>
        loggedIn && this.selectiveCartEnabled
          ? cartLoaded && sflLoaded
          : cartLoaded
      )
    );
  }

  //WORK in progess - remove?
  clear(): void | boolean {
    return this.clearMode
      ? this.activeCartService.clearActiveCart()
      : (this.clearMode = true);
  }

   //WORK in progess - remove?
  cancelClearCart(): void {
    this.clearMode = false;
  }

  openDialog(event: Event): void {
    const dialog = this.launchDialogService.openDialog(
      LAUNCH_CALLER.CLEAR_CART,
      this.element,
      this.vcr
    );

    if (dialog) {
      this.subscription.add(dialog.pipe(take(1)).subscribe());
    }
    event.stopPropagation();
  }

  saveForLater(item: OrderEntry) {
    if (this.loggedIn) {
      this.activeCartService.removeEntry(item);
      this.selectiveCartService.addEntry(item.product.code, item.quantity);
    } else {
      this.routingService.go({ cxRoute: 'login' });
    }
  }
}
