import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const CheckoutForm = ({ data }) => {
    const { _id, productPrice, buyerName, buyerEmail } = data;
    const stripe = useStripe();
    const elements = useElements();
    const [paymentError, setPaymentError] = useState(null);
    const [clientSecret, setClientSecret] = useState("");
    const [paymentSuccess, setPaymentSuccess] = useState(null);
    const [processing, setProcessing] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        fetch("http://localhost:5000/create-payment-intent", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ productPrice }),
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, [productPrice]);


    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);
        if (!card) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: card,
        });
        if (error) {
            setPaymentError(error.message);
            setPaymentSuccess(null);
        }
        else {
            setPaymentSuccess(paymentMethod.id);
            setPaymentError(null);
        }
        setProcessing(true);

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: buyerName,
                        email: buyerEmail,
                    },
                },
            },
        );

        if (confirmError) {
            setPaymentError(confirmError.message);
            setPaymentSuccess(null);
            return
        }
        else {
            setPaymentSuccess(paymentIntent.id);
            setPaymentError(null);
        }

        if (paymentIntent.status === 'succeeded') {
            setProcessing(false);

            const paymentDetails = {
                _id,
                buyerName,
                buyerEmail,
                paymentId: paymentIntent.id,
                paymentMethod: paymentIntent.payment_method,
                paymentStatus: paymentIntent.status,
                paymentAmount: paymentIntent.amount,
                paymentCurrency: paymentIntent.currency,
                paymentCreated: paymentIntent.created,
                paymentDescription: paymentIntent.description,
            }

            fetch("http://localhost:5000/payments", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(paymentDetails),
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data) {
                        toast.success('Payment details saved successfully');
                        navigate('/dashboard/my-orders');
                    }
                });
        }
    };
    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn btn-sm mt-4 btn-success' type="submit" disabled={!stripe || !clientSecret || processing}>
                    Pay
                </button>
            </form>
            <p className="text-red-500">{
                paymentError && <span>{paymentError}</span>
            }</p>
        </>
    );
};

export default CheckoutForm;