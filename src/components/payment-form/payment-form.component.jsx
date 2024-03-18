import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

import { PaymentFormContainer, FormContainer, PaymentButton } from "./paymant-form.styles";
import { useSelector } from "react-redux";
import { selectCartTotal } from "../../store/cart/cart.select";
import { selectCurrentUser } from "../../store/user/user.select";
import { useState } from "react";

const PaymentForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const amount = useSelector(selectCartTotal);
    const currentUser = useSelector(selectCurrentUser);
    const [isProcessingPayment,setIsProcessing]=useState(false);

    const paymentHandler = async (e) => {
        e.preventDefault();
        if (!stripe || !elements) {
            return;
        }
        setIsProcessing(true);
        const response = await fetch('/.netlify/functions/create-payment-intent', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ amount : amount * 100 }),
        }).then((res) => {
            return res.json();
        })
        const {
            paymentIntent:{client_secret},
        }=response;


        const paymentResult = await stripe.confirmCardPayment(client_secret , {
            payment_method:{
                card: elements.getElement(CardElement),
                billing_details:{
                    name:  currentUser ? currentUser.displayName :'Guest',
                }
            }
        });
        setIsProcessing(false);
        if(paymentResult.error){
            alert(paymentResult.error);
        }else{
            if(paymentResult.paymentIntent.status === 'succeeded'){
                alert('Payment succeed')
            }
        }
    };
    return (
        <PaymentFormContainer>
            <FormContainer onSubmit={paymentHandler}>
                <h2>Credit Cart Payment</h2>
                <CardElement />
                <PaymentButton isLoading={isProcessingPayment} >Pay now</PaymentButton>
            </FormContainer >

        </PaymentFormContainer>
    )
};

export default PaymentForm; 