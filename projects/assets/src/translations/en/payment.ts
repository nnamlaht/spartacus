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
    setAsDefault: 'Set as default payment method',
    billingAddress: 'Billing address',
    sameAsShippingAddress: 'Same as shipping address',
    billingAddressSameAsShipping:
      'Billing address is the same as shipping address',
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
    paymentMethodSelectedSucess:
      'Payment method ending in {{ digits }} selected successfully',
    newPaymentMethodsAreAddedDuringCheckout:
      'New payment methods are added during checkout.',
    invalidField: 'InvalidField: {{ field }}',
  },
  paymentCard: {
    deleteConfirmation: 'Are you sure you want to delete this payment method?',
    setAsDefault: 'Set as default',
    expires: 'Expires: {{ month }}/{{ year }}',
    defaultPaymentMethod: '✓ DEFAULT',
    selected: 'Selected',
    deletePaymentSuccess: 'Payment method deleted successfully',
  },
  paymentTypes: {
    title: 'Payment method',
    paymentType_CARD: 'Credit Card',
    paymentType_ACCOUNT: 'Account',
  },
  messages: {
    setAsDefaultSucessfully: 'New payment was sucessfully set as default',
  },
};
