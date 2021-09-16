export const payment = {
  paymentForm: {
    payment: 'Payment',
    choosePaymentMethod: 'Choose a payment method',
    paymentType: 'Payment Type',
    accountHolderName: {
      label: 'Account Holder Name',
      placeholder: 'Account Holder Name',
    },
    cardNumber: 'Card Number',
    expirationDate: 'Expiration Date',
    securityCode: 'Security code (CVV)',
    securityCodeTitle: 'Card Verification Value',
    saveAsDefault: 'Save as default',
    setAsDefault: 'Set as default',
    billingAddress: 'Billing address',
    sameAsShippingAddress: 'Same as shipping address',
    selectOne: 'Select One...',
    monthMask: 'MM',
    yearMask: 'YYYY',
    expirationYear: 'Expiration year {{ selected }}',
    expirationMonth: 'Expiration month {{ selected }}',
    useThisPayment: 'Use this payment',
    addNewPayment: 'Add New Payment',
    changePayment: 'Change Payment',
  },
  paymentMethods: {
    paymentMethods: 'Payment methods',
    newPaymentMethodsAreAddedDuringCheckout:
      'New payment methods are added during checkout.',
    invalidField: 'InvalidField: {{ field }}',
  },
  paymentCard: {
    deletePayment: 'You are about to delete this payment method',
    deleteConfirmation: 'Are you sure you want to delete this payment method?',
    paymentMethodDeletedSuccesfully: 'Payment method deleted successfully',
    setAsDefault: 'Set as default',
    expires: 'Expires: {{ month }}/{{ year }}',
    defaultPaymentMethod: '✓ DEFAULT',
    selected: 'Selected',
  },
  paymentTypes: {
    title: 'Payment method',
    paymentType_CARD: 'Credit Card',
    paymentType_ACCOUNT: 'Account',
  },
};
