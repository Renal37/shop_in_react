import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";

import CardIcon from "../../components/cart-icon/card-icon.components";
import CardDropdown from "../../components/card-dropdown/card-dropdown.component";

import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/card.context";

import { NavigationContainer,LogoContainer,NavLink,NavLinks } from "./navigation.styles.jsx";

import { ReactComponent as CrwnLogo } from '../../assect/crown.svg';
import { signOutUser } from "../../utils/firebase/firebase.utils";


const Navigation = () => {
  const { currenUser } = useContext(UserContext);
  const {isCartOpen} =useContext(CartContext);
  
  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to='/'>
          <CrwnLogo />
        </LogoContainer>
        <NavLinks>
          <NavLink to='/shop'>SHOP</NavLink>

          {currenUser ? (
            <NavLink as='span' onClick={signOutUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to='/auth'>SIGN IN</NavLink>
          )}
          <CardIcon />
        </NavLinks>
        {isCartOpen && <CardDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};
export default Navigation;