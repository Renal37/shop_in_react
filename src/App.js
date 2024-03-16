import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Home from './routes/home/home.routes';
import  Navigation  from './routes/navigation/navigation.routes';
import Authentication from './components/authentication/authentication';
import Shop from './routes/shop/shop.router';
import Checkout from './routes/checkout/checkout.routes';
import { checkUserSession, setCurrentUser } from './store/user/user.action';


const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
   dispatch(checkUserSession())
  }, [dispatch]);

  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop/*' element={<Shop />} />
        <Route path='auth' element={<Authentication />} />
        <Route path='checkout' element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
