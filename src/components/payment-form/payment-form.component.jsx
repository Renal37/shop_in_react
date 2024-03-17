import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";


import { PaymentFormContainer,FormContainer,PaymentButton } from "./paymant-form.styles";


const PaymentForm=()=>{
    const stripe = useStripe();
    const elements = useElements();
    const paymentHandler = async(e)=>{
        e.preventDefault();
        if(!stripe || !elements){
            return;
        }

    }
    return(
        <PaymentFormContainer>
            <FormContainer>
                <h2>Credit Cart Payment</h2>
                <CardElement />
            <PaymentButton >Pay now</PaymentButton>
            </FormContainer >
                
        </PaymentFormContainer>
    )
};

export default PaymentForm;