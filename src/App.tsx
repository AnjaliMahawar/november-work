import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App2 from './App2';
import VideoPlay from './VideoPlay';
import { Provider } from 'react-redux';
import Cart from './Cart';
import Navbar from './Navbar';
import store from './store/store';

import Form1 from './Form';
import Address from './Address';
import Wish from './Wish';
import Products from './Products';
import Pdf from './Pdf';
import FormDesign from './FormDesign';
import Mapp from './Mapp';
import ZipCode from './ZipCode';
import CountryForm from './CountryForm';
function App() {
  return (
   <Provider store={store}>

    <BrowserRouter>
     
     <Routes>
      <Route path='/' element={<App2/>}/>
      <Route path='videoplayer' element={<VideoPlay/>}/>
      <Route path='shopping' element={<Products/>}/>
      <Route path='cart' element={<Cart/>}/>
      <Route path='form' element={<Form1/>}/>
      <Route path='address' element={<Address/>}/>
      <Route path='wish' element={<Wish/>}/> 
      <Route path='pdf' element={<Pdf/>}/> 
      <Route path='design' element={<FormDesign/>}/> 
      <Route path='map' element={<Mapp/>}/> 
      <Route path='zip' element={<ZipCode/>}/> 
      <Route path='country' element={<CountryForm/>}/> 
     </Routes>
     </BrowserRouter>

   </Provider>
  );
}

export default App;
