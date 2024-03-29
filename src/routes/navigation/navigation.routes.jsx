import { Fragment } from "react";
import { useSelector,useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";

import CardIcon from "../../components/cart-icon/card-icon.components";
import CardDropdown from "../../components/card-dropdown/card-dropdown.component";

import { selectIsCartOpen } from "../../store/cart/cart.select.js";
import { selectCurrentUser } from '../../store/user/user.select.js';
import { NavigationContainer,LogoContainer,NavLink,NavLinks } from "./navigation.styles.jsx";
import { ReactComponent as CrwnLogo } from '../../assect/crown.svg';
import { signOutStart } from "../../store/user/user.action.js";


const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);
  const dispatch = useDispatch();
  const signOutUser = ( )=> dispatch(signOutStart());
  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to='/'>
          <CrwnLogo />
        </LogoContainer>
        <NavLinks>
          <NavLink to='/shop'>SHOP</NavLink>

          {currentUser ? (
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