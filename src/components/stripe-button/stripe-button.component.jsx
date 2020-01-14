import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_njs9ThSIEa0izjrD5CNtde7Z002Gu6w0e7';

  const onToken = token => {
    console.log(token);
    alert('Payment SuccessFul');
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='CROWN CLOTHINGS LTD'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
