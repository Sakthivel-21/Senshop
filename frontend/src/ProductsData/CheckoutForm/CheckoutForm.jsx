import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import "./CheckoutForm.css"; // Import CSS

const CheckoutForm = ({ clientSecret }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        setError(null);

        if (!stripe || !elements) return;

        const cardElement = elements.getElement(CardElement);
        const { paymentIntent, error } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: { card: cardElement },
        });

        if (error) {
            setError(error.message);
        } else {
            setSuccess(true);
            alert(`Payment Successful! Payment ID: ${paymentIntent.id}`);
        }
        setLoading(false);
    };

    return (
        <form onSubmit={handleSubmit} className="payment-form">
            <CardElement className="card-element" />
            <button type="submit" disabled={loading || !stripe} className="pay-button">
                {loading ? "Processing..." : "Pay Now"}
            </button>
            {error && <p className="error-message">{error}</p>}
            {success && <p className="success-message">Payment Successful!</p>}
        </form>
    );
};

export default CheckoutForm;
