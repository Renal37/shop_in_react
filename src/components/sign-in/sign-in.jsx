import { useState } from "react";
import FormInput from "../form-input/form-input.component";
import { signInWithGooglePopup, createUserDocumentFromAuth, signInAutiUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";
import Button from "../button/button.component";
import './sign-in.scss';

const defaultFrom = {
    email: "",
    password: "",
}
const SignIn = () => {
    const [formFields, setFormFields] = useState(defaultFrom);
    const { email, password } = formFields;
    const resetFromFileds = () => {
        setFormFields(defaultFrom);
    }
    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const {user} = await signInAutiUserWithEmailAndPassword(email, password);
            
            resetFromFileds();
        }
        catch (error) {
            switch (error.code) {
                case 'auth/invalid-credential':
                    alert('incorrect password or email');
                    break;
                case 'auth/user-not-found':
                    alert('user not found');
                    break;
                default:
                    console.log(error);
            }
            console.log(error);

        }
    }

    const handChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });

    }
    const signInWithGoogl = async () => {
      await signInWithGooglePopup();
    }
    return (
        <div className="sign-up-container">
            <h2>Already have an account ?</h2>
            <span>Sign in with email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput label='Email' type="email" required onChange={handChange} name='email' value={email} />
                <FormInput label='Password' type="password" onChange={handChange} name="password" value={password} required />
                <div className="button">
                    <Button type="submit">Sign In</Button>
                    <Button type='button' buttonType='google' onClick={signInWithGoogl}>
                      Google
                    </Button>
                </div>
            </form>
        </div>
    )

}
export default SignIn;