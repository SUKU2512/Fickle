import React from 'react';
import Header from './Components/Header/Header';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Body from './Components/Body/Body';
import Footer from './Components/Footer/Footer';
import Subscribe from './Components/Subscribe/Subscribe';
export default function App() {
  return (
    <div>
      <Header/>
      <Body/>
      <Subscribe/>
      <Footer/>
    </div>
  )
}
