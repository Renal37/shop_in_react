import { createContext, useState,useEffect } from 'react';
import { addCollectionAndDocument,getCategotiesAndDocument } from '../utils/firebase/firebase.utils.js';

// import SHOP_DATA from '../shop-date.js';

export const CategoriesContext = createContext({
  categoriesMap: {},
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});
// useEffect(()=>{
//   addCollectionAndDocument('categories',SHOP_DATA);
// },[])
useEffect(()=>{
  const getCategoriesMap = async()=>{
    const categoryMap = await getCategotiesAndDocument();
    console.log(categoryMap);
    setCategoriesMap(categoryMap);
  }
  getCategoriesMap();
},[])
  const value = { categoriesMap };
  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};