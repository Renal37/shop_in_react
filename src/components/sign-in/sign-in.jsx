import { createUserDocumentFromAuth, signInWithGooglePopup } from "../../utils/firebase/firebase.utils";
import Button from "../button/button.component";
import SignUp from "../sign-up/sign-up-form/sign-up";
const SignIn = () => {

    const logGoogleUser = async () =>{
        const { user } = await signInWithGooglePopup();
        const userDocRef = createUserDocumentFromAuth(user);
    }
        // const logRedirect = async () =>{
        //     const response = await signInWithGoogleRedirect(auth);
        //     if(response)  {
        //         const userDocRef = createUserDocumentFromAuth(response.user);
        //     }          
        // }
    return (
        <div><h1>Heelo</h1>
        <Button buttonType='google' onClick={logGoogleUser}>
            Sign in with Google
        </Button>
        < SignUp />
        </div>
    );
  };
  export default SignIn;