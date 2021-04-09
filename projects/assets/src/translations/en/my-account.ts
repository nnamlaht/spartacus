export const myAccount = {
  orderDetails: {
    orderId: 'Order #',
    replenishmentId: 'Replenishment #',
    purchaseOrderId: 'Purchase Order #',
    emptyPurchaseOrderId: 'None',
    none: 'None {{value}}',
    placed: 'Placed',
    placedBy: 'Placed By',
    unit: 'Unit',
    costCenter: 'Cost Center',
    costCenterAndUnit: 'Cost Center / Unit',
    costCenterAndUnitValue: '{{costCenterName}} / {{unitName}}',
    payByAccount: 'Pay by Account',
    paidByCreditCard: '(paid by credit card)',
    status: 'Status',
    shippedOn: 'Shipped on',
    startOn: 'Start On',
    nextOrderDate: 'Next Order Date',
    frequency: 'Frequency',
    cancelled: ' Cancelled',
    deliveryStatus_IN_TRANSIT: 'In Transit',
    deliveryStatus_READY_FOR_PICKUP: 'Ready for Pickup',
    deliveryStatus_READY_FOR_SHIPPING: 'Ready for Shipping',
    deliveryStatus_WAITING: 'Waiting',
    deliveryStatus_DELIVERING: 'Delivering',
    deliveryStatus_PICKPACK: 'Preparing for Shipment',
    deliveryStatus_PICKUP_COMPLETE: 'Pickup Complete',
    deliveryStatus_DELIVERY_COMPLETED: 'Delivery Complete',
    deliveryStatus_PAYMENT_NOT_CAPTURED: 'Payment Issue',
    deliveryStatus_READY: 'In Process',
    deliveryStatus_DELIVERY_REJECTED: 'Delivery Rejected',
    deliveryStatus_SHIPPED: 'Shipped',
    deliveryStatus_TAX_NOT_COMMITTED: 'Tax Issue',
    deliveryStatus_CANCELLED: 'Cancelled',
    statusDisplay_cancelled: 'Cancelled',
    statusDisplay_cancelling: 'Cancel Pending',
    statusDisplay_completed: 'Completed',
    statusDisplay_created: 'Created',
    statusDisplay_error: 'Pending',
    statusDisplay_Error: 'Pending',
    statusDisplay_processing: 'Pending',
    statusDisplay_open: 'Open',
    statusDisplay_pending: {
      approval: 'Pending Approval',
      merchant: {
        approval: 'Pending Merchant Approval',
      },
    },
    statusDisplay_approved: 'Approved',
    statusDisplay_rejected: 'Rejected',
    statusDisplay_merchant: {
      approved: 'Merchant Approved',
      rejected: 'Merchant Rejected',
    },
    statusDisplay_assigned: {
      admin: 'Assigned To Administrator',
    },
    consignmentTracking: {
      action: 'Track package',
      dialog: {
        header: 'Tracking Information',
        shipped: 'Shipped',
        estimate: 'Estimated Delivery',
        carrier: 'Delivery Service',
        trackingId: 'Tracking Number',
        noTracking:
          'The package has not been dispatched from the warehouse. The tracking information will be available after the package is shipped.',
        loadingHeader: 'Consignment Tracking',
      },
    },
    cancellationAndReturn: {
      returnAction: 'Request a Return',
      cancelAction: 'Cancel Items',
      item: 'Item',
      itemPrice: 'Item Price',
      quantity: 'Max Quantity',
      returnQty: 'Quantity to Return',
      cancelQty: 'Quantity to Cancel',
      setAll: 'Set all quantities to maximum',
      totalPrice: 'Total',
      submit: 'Submit Request',
      returnSuccess: 'Your return request ({{rma}}) was submitted',
      cancelSuccess:
        'Your cancellation request was submitted (original order {{orderCode}} will be updated)',
    },
    cancelReplenishment: {
      title: 'Cancel Replenishment',
      description: 'Cancel any future replenishment order?',
      accept: 'Yes',
      reject: 'No',
      cancelSuccess:
        'Replenishment order #{{replenishmentOrderCode}} has been successfully cancelled',
    },
  },
  orderHistory: {
    orderHistory: 'Order history',
    orderId: 'Order #',
    emptyPurchaseOrderId: 'None',
    date: 'Date',
    status: 'Status',
    total: 'Total',
    noOrders: 'We have no order records for this account.',
    noReplenishmentOrders:
      'We have no replenishment order records for this account.',
    startShopping: 'Start Shopping',
    sortByMostRecent: 'Sort by Most recent',
    replenishmentOrderHistory: 'Replenishment Order History',
    replenishmentOrderId: 'Replenishment #',
    purchaseOrderNumber: 'PO #',
    startOn: 'Start On',
    frequency: 'Frequency',
    nextOrderDate: 'Next Order Date',
    cancel: 'Cancel',
    cancelled: 'Cancelled',
    replenishmentHistory: 'Replenishment History',
    notFound: 'No Orders Found',
  },
  closeAccount: {
    confirmAccountClosure: 'Confirm Account Closure',
    confirmAccountClosureMessage:
      'Are you sure you want to close your account?',
    closeMyAccount: 'CLOSE MY ACCOUNT',
    accountClosedSuccessfully: 'Account closed with success',
    accountClosedFailure: 'Failed to close account',
  },

  // @deprecated the updateEmailForm labels are moved to the user lib and will be dropped with the next major release
  updateEmailForm: {
    newEmailAddress: {
      label: 'New email address',
      placeholder: 'Enter email',
    },
    confirmNewEmailAddress: {
      label: 'Confirm new email address',
      placeholder: 'Enter email',
    },
    enterValidEmail: 'Please enter a valid email.',
    bothEmailMustMatch: 'Both emails must match',
    password: {
      label: 'Password',
      placeholder: 'Enter password',
    },
    pleaseInputPassword: 'Please input password',
    emailUpdateSuccess: 'Success. Please sign in with {{ newUid }}',
  },

  updatePasswordForm: {
    oldPassword: {
      label: 'Old Password',
      placeholder: 'Old Password',
    },
    oldPasswordIsRequired: 'Old password is required.',
    newPassword: {
      label: 'New Password',
      placeholder: 'New Password',
    },
    passwordMinRequirements:
      'Password must be six characters minimum, with one uppercase letter, one number, one symbol',
    confirmPassword: {
      label: 'Confirm New Password',
      placeholder: 'Confirm Password',
    },
    bothPasswordMustMatch: 'Both password must match',
    passwordUpdateSuccess: 'Password updated with success',
  },
  updateProfileForm: {
    title: '',
    none: '',
    firstName: {
      label: 'First name',
      placeholder: 'First name',
    },
    firstNameIsRequired: 'First name is required.',
    lastName: {
      label: 'Last name',
      placeholder: 'Last name',
    },
    lastNameIsRequired: 'Last name is required.',
    profileUpdateSuccess: 'Personal details successfully updated',
    customerId: 'Customer #',
  },
  consentManagementForm: {
    clearAll: 'Clear all',
    selectAll: 'Select all',
    message: {
      success: {
        given: 'Consent successfully given.',
        withdrawn: 'Consent successfully withdrawn.',
      },
    },
  },
  myCoupons: {
    noCouponsMessage: 'You have no coupons available.',
    effectiveTitle: 'Effective:',
    Effective: 'EFFECTIVE',
    PreSession: 'EFFECTIVE SOON',
    ExpireSoon: 'EXPIRING SOON',
    readMore: 'Read more',
    notification: 'Notification',
    findProducts: 'Find Products',
    status: 'Status:',
    dialogTitle: 'Coupon',
    claimCustomerCoupon: 'You have successfully claimed this coupon.',
    myCoupons: 'My coupons',
    startDateAsc: 'Start Date (ascending)',
    startDateDesc: 'Start Date (descending)',
    endDateAsc: 'End Date (ascending)',
    endDateDesc: 'End Date (descending)',
    sortByMostRecent: 'Sort by Most recent',
    notesPreffix:
      'You can set your preferred channels for receiving coupon notifications on the ',
    notesLink: 'Notification Channels',
    notesSuffix: ' page.',
  },
  notificationPreference: {
    message: 'Select your preferred notification channels',
    note: 'Note: ',
    noteMessage:
      'If you deactivate all channels you will not be able to receive any further notifications.',
    EMAIL: 'Email:',
    SMS: 'SMS:',
    SITE_MESSAGE: 'SiteMessage',
  },
  myInterests: {
    header: 'My Interests',
    item: 'ITEM',
    price: 'PRICE',
    notifications: 'NOTIFICATIONS',
    noInterests: 'You have no registered interests yet.',
    inStock: 'In Stock',
    lowStock: 'Low Stock',
    outOfStock: 'Out of Stock',
    BACK_IN_STOCK: 'Back In Stock',
    sortByMostRecent: 'Sort by Most recent',
    expirationDate: ' - Till {{ expirationDate }}',
    productId: 'ID {{ code }}',
    remove: 'REMOVE',
    sorting: {
      byNameAsc: 'Name (ascending)',
      byNameDesc: 'Name (descending)',
    },
  },
  AccountOrderHistoryTabContainer: {
    tabs: {
      AccountOrderHistoryComponent: 'ALL ORDERS ({{param}})',
      OrderReturnRequestListComponent: 'RETURNS ({{param}})',
    },
  },
  returnRequestList: {
    returnRequestId: 'Return #',
    orderId: 'Order #',
    date: 'Date Created',
    status: 'Status',
    sortByMostRecent: 'Sort by Most recent',
    statusDisplay_APPROVAL_PENDING: 'Approval Pending',
    statusDisplay_CANCELED: 'Cancelled',
    statusDisplay_CANCELLING: 'Cancelling',
    statusDisplay_WAIT: 'Wait',
    statusDisplay_RECEIVED: 'Received',
    statusDisplay_RECEIVING: 'Receiving',
    statusDisplay_APPROVING: 'Approving',
    statusDisplay_REVERSING_PAYMENT: 'Reversing Payment',
    statusDisplay_PAYMENT_REVERSED: 'Payment Reversed',
    statusDisplay_PAYMENT_REVERSAL_FAILED: 'Payment Reversal Failed',
    statusDisplay_REVERSING_TAX: 'Reversing Tax',
    statusDisplay_TAX_REVERSED: 'Tax Reversed',
    statusDisplay_TAX_REVERSAL_FAILED: 'Tax Reversal Failed',
    statusDisplay_COMPLETED: 'Completed',
  },
  returnRequest: {
    returnRequestId: 'Return Request #',
    orderCode: 'For Order #',
    status: 'Return status',
    cancel: 'Cancel Return Request',
    item: 'Description',
    itemPrice: 'Item Price',
    returnQty: 'Return Quantity',
    total: 'Total',
    summary: 'Return Totals',
    subtotal: 'Subtotal',
    deliveryCode: 'Delivery cost',
    estimatedRefund: 'Estimated refund',
    note:
      'The totals are estimated and may not include applicable taxes or other charges.',
    cancelSuccess: 'Your return request ({{rma}}) was cancelled',
  },
  wishlist: {
    empty: 'No products in your wish list yet',
  },
};
