import { Routes, Route } from 'react-router-dom';
import  Navigation  from './routes/navigation/navigation.routes';
import Home from './routes/home/home.routes';
import './categories.style.scss';
import Authentication from './components/authentication/authentication';
import Shop from './routes/shop/shop.router';
const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />} >
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='auth' element={<Authentication />} />
        </Route>
    </Routes>
  );
}

export default App;
