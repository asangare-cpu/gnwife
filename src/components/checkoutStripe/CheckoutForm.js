// CheckoutForm.js
import React, { useState } from 'react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import './checkout.css'
import axios from 'axios';
import { height } from '@fortawesome/free-solid-svg-icons/fa1';

// Define the CheckoutForm functional component
const CheckoutForm = () => {
  // Get access to the stripe and elements objects
  const stripe = useStripe();
  const elements = useElements();
  // State to manage payment success and error messages
  const [paymentSuccess, setPaymentSuccess] = useState(null);
  const [paymentError, setPaymentError] = useState(null);

  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Check if Stripe and Elements are available
    if (!stripe || !elements) {
      return;
    }

    // Get the CardElement instance
    const cardElement = elements.getElement(CardElement);
    try {
      const {paymentMethod, error} = await stripe.createPaymentMethod({
        type : 'card',
        card : cardElement,
      });
      handlePayment(paymentMethod.id)
    } catch (error) {
      setPaymentError(error.message)
    }

    // try {
    //   //Greate the token using the createToken method
    //   const { token } = await stripe.createToken(cardElement);
    //   await handlePayment(token.id);
    // } catch (error) {
    //   console.error(error);
    //   // Set payment error state if an error occurs
    //   setPaymentError(error.message || 'An error occurred during payment.');
    //   setPaymentSuccess(null);
    // }
  };

  // Function to handle the payment and get the token.id
  const handlePayment = async (paymentMethodId) => {
    try {
      const response = await axios.post("http://localhost:3001/create-payment-intent", {
        paymentMethodId : paymentMethodId,
      });
      const clientSecret = response.data.clientSecret;
      if (!clientSecret){
        setPaymentError("Failed to get client secret")
        return;
      }
      const confirmPayment = stripe.confirmCardPayment(clientSecret);
      if (confirmPayment.error){
        setPaymentError(confirmPayment.error.message);
      }
      else{
        setPaymentSuccess("Payment successful!");
      }
      // if (response.data.success) {
      //   // Set payment success state if successful
      //   setPaymentSuccess('Payment successful!');
      //   setPaymentError(null);
      // } else {
      //   setPaymentError('Payment failed. Please try again.');
      //   setPaymentSuccess(null);
      // }
    } catch (error) {
      console.log(error);
      // Set payment error state if an error occurs
      setPaymentError('An error occurred while processing your payment : ', error.message);
      setPaymentSuccess(null);
    }
  };

  // Render the form with CardElement and submit button
  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <label for="cardHolder">Card's Holder</label>
      <input type="text" id='cardHolder' name='cardHolder'
       placeholder="First name and Family name"/>
      <div style={styles.carDiv}>
        <CardElement options={CARD_ELEMENT_OPTIONS} />
      </div>
      <label for="email">Email</label>
      <input type="email" id='email' name='email' placeholder='contact@gnwifemasteredit.co.site'/>
      <label for="address">Billing adress</label>
      <input type="address" id='address' name='address'
      placeholder="Address, poscode city, country"
      style={{marginBottom:"15px"}}/>
      <button 
         type="submit"
         style={stripe ? styles.submitButton : { ...styles.submitButton, ...styles.disabledButton }}
         disabled={!stripe}
      >
        Pay
      </button>
      {/* Display payment error or success message if available */}
      {paymentError && <div style={styles.error}>{paymentError}</div>}
      {paymentSuccess && <div style={styles.success}>{paymentSuccess}</div>}
    </form>
  );
};
export default CheckoutForm;


const styles = {
  form: {
    display : "flex",
    flexDirection : "column",
    width: '450px',
    padding : "20px",
    margin: "25px 20%",
    border : "1px solid blue",
    borderRadius : "10px"
  },
  carDiv:{
    margin:"15px 0px 15px 0px",
    border:"2px solid blue",
    padding:"5px"
  },
  submitButton: {
    marginTop: '16px',
    padding: '10px 15px',
    backgroundColor: '#5cb85c',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  disabledButton: {
    backgroundColor: '#b3b3b3', // Adjust the color for disabled state
    cursor: 'not-allowed',
  },
  error: {
    color: 'red',
    marginTop: '8px',
  },
  success: {
    color: 'green',
    marginTop: '8px',
  },
};

const CARD_ELEMENT_OPTIONS = {
  style: {
    base: {
      display : "inline-block",
      padding : "12px",
      fontSize: "16px",
      color: "#32325d",
      fontFamily: "'Roboto', sans-serif",
      "::placeholder": {
        color: "#aab7c4",
      },
    },
    iconColor: "red",
    invalid: {
      color: "#fa755a",
    },
  },
  iconStyle: "solid",
  hidePostalCode: true, // Hide postal code field if not needed
};