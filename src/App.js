import './App.css';
import Container2 from './Components/Container2/Container2';
import SideBar from './Components/SideBar/SideBar'
import TestPage from './Pages/TestPage/TestPage';
import Modal from './Modal/Modal'
import { connect } from 'react-redux';
import { useEffect } from 'react';
import {SetProducts} from './Redux/Products/ProductsActions'
import {SetBanners} from './Redux/Banners/BannersActions'
import Navbar from './Components/Navbar/Navbar';
import {SetUser} from './Redux/Auth/authActions'


var App = ({modal,SetProducts,SetBanners,SetUser})=> {

  useEffect(() => {
    //CDM
    var uid = localStorage.getItem('uid');
    if(uid) SetUser(uid);
    try {SetProducts()} catch(error) {console.error(error+"new");}
    SetBanners(uid);
  }, [])

  return (
    <div className="container">
      {modal.active ? <Modal/> : null}
      <Navbar/>
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
  SetBanners,
  SetUser
}

export default connect(mapState,actions)(App);
