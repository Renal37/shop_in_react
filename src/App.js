import { Routes, Route } from 'react-router-dom';
import  Navigation  from './routes/navigation/navigation.routes';
import Home from './routes/home/home.routes';
import './categories.style.scss';
const Shop = () => {
  return <h1>Shop</h1>;
};
const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />} >
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} /> 
        </Route>
    </Routes>
  );
}

export default App;
