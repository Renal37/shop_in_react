import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";

import CardIcon from "../../components/cart-icon/card-icon.components";
import CardDropdown from "../../components/card-dropdown/card-dropdown.component";

import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/card.context";

import { ReactComponent as CrwnLogo } from '../../assect/crown.svg';
import { signOutUser } from "../../utils/firebase/firebase.utils";

import './navigation.styles.scss'

const Navigation = () => {
  const { currenUser } = useContext(UserContext);
  const {isCartOpen} =useContext(CartContext);
  

  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to='/'>
          <CrwnLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to='/shop'>
            SHOP
          </Link>
            {currenUser?(
              <span className="nav-link" onClick={signOutUser}>SIGN OUT</span>
            ):(<Link className="nav-link" to='/auth'>
            SIGN IN
          </Link>)
          }
          <CardIcon />
        </div>
          {isCartOpen && <CardDropdown />}
      </div>
      <Outlet />
    </Fragment>
  );
};
export default Navigation;