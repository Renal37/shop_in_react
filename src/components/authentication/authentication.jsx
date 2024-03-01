import SignUp from "../sign-up/sign-up-form/sign-up";
import SignIn from "../sign-in/sign-in";
import './authentication.scss'
const Authentication = () => {

        // const logRedirect = async () =>{
        //     const response = await signInWithGoogleRedirect(auth);
        //     if(response)  {
        //         const userDocRef = createUserDocumentFromAuth(response.user);
        //     }          
        // }
    return (
        <div className="authentication-container">
        <SignIn />  
        < SignUp />
        </div>
    );
  };
  export default Authentication;