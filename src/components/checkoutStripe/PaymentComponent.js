// PaymentComponent.js
import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';

//Create a Stripe promise (stripePromise) using the loadStripe function. This promise is used to load the Stripe.js script asynchronously.
const stripePromise = loadStripe("pk_test_51QywfiFYLkmobDJ3958lUUkakEQZ02s5K8MfeTLpFPMXxOJVm3AsqjbZ68sJ0NLnkwSCbBa3dg0vQ3IRxHeXcnUx00dIa6PAVb");
const PaymentComponent = () => {
  return (
    <div>
      <h2>Stripe Payment Example</h2>
      {/* Wrap the CheckoutForm component with the Elements component and provide the Stripe promise */}
      <Elements stripe={stripePromise}>
        <CheckoutForm />
      </Elements>
    </div>
  );
};
export default PaymentComponent;