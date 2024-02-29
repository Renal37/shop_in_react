import { useState } from "react";

import { createaAuthUser } from "../../utils/firebase/firebase.utils";

const defaultFrom = {
    displayName: "",
    email: "",
    password: "",
    confirmpassword: ""
}
const SignUp = () => {
    const [formFields, setFormFields] = useState(defaultFrom);
    const { displayName, email, password, confirmpassword } = formFields;

    const handleSubmit = async(event) =>{
        event.preventDefault();

        
    }
    
    console.log(formFields)
    const handChange = (event) => {
        const{name,value} = event.target;
        setFormFields({ ...formFields, [name] : value });

    }
    return (
        <div>
            <h1>Sign up with email and password</h1>
            <form onSubmit={() => { }}><label>Name</label><input type="text"required onChange={handChange} name='displayName' value={displayName} /><label>Email</label><input type="email" required onChange={handChange}  name='email' value={email} />
                <label>Password</label><input type="password" onChange={handChange} value={password} name="password"  required />     <label>Confirm Password</label><input type="password"onChange={handChange} value={confirmpassword} name="confirmpassword"  required /><button type="submit">Sign up</button></form>
        </div>
    )

}
export default SignUp;