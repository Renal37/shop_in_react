import {
    BaseButton,
    GoogleSignInButton,
    InvertedButton,
    ButtonSpunner
} from './button.style';

export const BUTTON_TYPE = {
    base: 'base',
    google: 'google-sign-in',
    inverted: 'inverted',
}
const getButton = (buttonType = BUTTON_TYPE.base) =>
({
    [BUTTON_TYPE.base]: BaseButton,
    [BUTTON_TYPE.google]: GoogleSignInButton,
    [BUTTON_TYPE.inverted]: InvertedButton,
}[buttonType]);

const Button = ({ children, buttonType, isLoading, ...otherProps }) => {
    const CustomButton = getButton(buttonType);
    return <CustomButton disabled={isLoading} {...otherProps}>{isLoading ?<ButtonSpunner />:children}</CustomButton>;
};


export default Button;