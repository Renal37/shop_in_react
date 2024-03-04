import { useState } from "react";
import FormInput from "../../form-input/form-input.component";
import { createaAuthUserWithEmail ,createUserDocumentFromAuth} from "../../../utils/firebase/firebase.utils";
import Button from "../../button/button.component";
import './sign-up.scss';

const defaultFrom = {
    displayName: "",
    email: "",
    password: "",
    confirmpassword: "",
}
const SignUp = () => {
    const [formFields, setFormFields] = useState(defaultFrom);
    const { displayName, email, password, confirmpassword } = formFields;


    const resetFromFileds = () =>{
        setFormFields(defaultFrom);
    }
    const handleSubmit = async (event) =>{
        event.preventDefault();

        if (password !== confirmpassword){
            alert('password do not match');
            return;
        }
        try{
            const {user}  = await createaAuthUserWithEmail(email,password);

            await createUserDocumentFromAuth(user,{displayName});
            resetFromFileds();

        }
        catch (error) {
            if (error.code === 'auth/email-already-in-use') {
              alert('Cannot create user, email already in use');
            } else {
              console.log('user creation encountered an error', error);
            }
        }
    }
    
    const handChange = (event) => {
        const{name,value} = event.target;
        setFormFields({ ...formFields, [name] : value });

    }
    return (
        <div className="sign-up-container">
            <h2>Dont have an account</h2>
            <span>Sign up with email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput label='Name' type="text"required onChange={handChange} name='displayName' value={displayName} />
                <FormInput label='Email' type="email" required onChange={handChange}  name='email' value={email} />
                <FormInput label='Password' type="password" onChange={handChange} value={password} name="password"  required />     
                <FormInput label='Confirm Password' type="password"onChange={handChange} value={confirmpassword} name="confirmpassword"  required />
                <Button  type="submit">Sign up</Button></form>
        </div>
    )

}
export default SignUp;