import './App.css';
import Container2 from './Components/Container2/Container2';
import SideBar from './Components/SideBar/SideBar'
import TestPage from './Pages/TestPage/TestPage';
import Modal from './Modal/Modal'
import { connect } from 'react-redux';
import { useEffect } from 'react';
import {SetProducts} from './Redux/Products/ProductsActions'
import {SetBanners} from './Redux/Banners/BannersActions'


var App = ({modal,SetProducts,SetBanners})=> {

  useEffect(() => {
    //CDM
    
    SetProducts();
    SetBanners();
  }, [])

  return (
    <div className="container">
      {modal.active ? <Modal/> : null}
      <SideBar/>
      <Container2/>
      {/* <TestPage/> */}
    </div>
  );
}

var mapState = (state) => {
  return {
    modal : state.modal
  }
}

var actions = {
  SetProducts,
  SetBanners
}

export default connect(mapState,actions)(App);
